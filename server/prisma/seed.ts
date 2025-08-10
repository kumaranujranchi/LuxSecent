import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Floral', slug: 'floral' },
      { name: 'Woody', slug: 'woody' },
      { name: 'Fresh', slug: 'fresh' },
    ],
    skipDuplicates: true,
  })
  console.log('Categories ensured:', categories.count)

  const cat = await prisma.category.findFirst({ where: { slug: 'floral' } })
  if (!cat) return

  const p = await prisma.product.upsert({
    where: { slug: 'midnight-elegance' },
    update: {},
    create: {
      name: 'Midnight Elegance',
      slug: 'midnight-elegance',
      description: 'A timeless floral signature with radiant trails.',
      brand: 'LuxeScents',
      priceCents: 18900,
      categoryId: cat.id,
      inventory: { create: { quantity: 25 } },
    },
    include: { inventory: true },
  })
  console.log('Seeded product:', p.name)
}

main().finally(() => prisma.$disconnect())
