import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'luxescents-api' })
})

// Categories
app.get('/categories', async (_req, res) => {
  const items = await prisma.category.findMany({ orderBy: { name: 'asc' } })
  res.json(items)
})

app.post('/categories', async (req, res) => {
  const schema = z.object({ name: z.string().min(1), slug: z.string().min(1) })
  const data = schema.parse(req.body)
  const created = await prisma.category.create({ data })
  res.status(201).json(created)
})

// Products
app.get('/products', async (req, res) => {
  const { q, category } = req.query as { q?: string; category?: string }
  const items = await prisma.product.findMany({
    where: {
      AND: [
        q ? { name: { contains: q, mode: 'insensitive' } } : {},
        category ? { category: { slug: category } } : {},
      ],
    },
    include: { category: true, inventory: true, deals: true },
    orderBy: { createdAt: 'desc' },
  })
  res.json(items)
})

app.get('/products/:slug', async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { slug: req.params.slug },
    include: { category: true, inventory: true, deals: true },
  })
  if (!product) return res.status(404).json({ error: 'Not found' })
  res.json(product)
})

app.post('/products', async (req, res) => {
  const schema = z.object({
    name: z.string().min(1),
    slug: z.string().min(1),
    description: z.string().min(1),
    brand: z.string().min(1),
    priceCents: z.number().int().positive(),
    rating: z.number().min(0).max(5).optional(),
    imageUrl: z.string().url().optional(),
    categoryId: z.string().min(1),
    quantity: z.number().int().nonnegative().default(0),
  })
  const data = schema.parse(req.body)
  const created = await prisma.product.create({
    data: {
      name: data.name,
      slug: data.slug,
      description: data.description,
      brand: data.brand,
      priceCents: data.priceCents,
      rating: data.rating ?? 0,
      imageUrl: data.imageUrl,
      categoryId: data.categoryId,
      inventory: { create: { quantity: data.quantity } },
    },
    include: { inventory: true },
  })
  res.status(201).json(created)
})

app.patch('/products/:id', async (req, res) => {
  const id = req.params.id
  const schema = z.object({
    name: z.string().min(1).optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    priceCents: z.number().int().positive().optional(),
    rating: z.number().min(0).max(5).optional(),
    imageUrl: z.string().url().optional(),
    categoryId: z.string().optional(),
  })
  const data = schema.parse(req.body)
  const updated = await prisma.product.update({ where: { id }, data })
  res.json(updated)
})

// Inventory
app.post('/inventory/:productId/adjust', async (req, res) => {
  const productId = req.params.productId
  const schema = z.object({ delta: z.number().int() })
  const { delta } = schema.parse(req.body)
  const inv = await prisma.inventory.update({
    where: { productId },
    data: { quantity: { increment: delta } },
  })
  res.json(inv)
})

// Deals
app.post('/deals', async (req, res) => {
  const schema = z.object({
    productId: z.string(),
    type: z.enum(['FLASH', 'LIMITED', 'CLEARANCE']),
    discountPct: z.number().int().min(1).max(90),
    startsAt: z.coerce.date(),
    endsAt: z.coerce.date(),
    active: z.boolean().default(true),
  })
  const data = schema.parse(req.body)
  const created = await prisma.deal.create({ data })
  res.status(201).json(created)
})

const port = Number(process.env.PORT || 4000)
app.listen(port, () => {
  console.log(`API running on :${port}`)
})
