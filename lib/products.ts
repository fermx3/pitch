import { prisma } from './prisma'

export async function getAllProducts() {
  return prisma.product.findMany(
    {
      orderBy: {
        created_at: 'desc',
      },
    }
  )
}

export async function getTopProducts() {
  return prisma.product.findMany({
    where: { is_top_product: true },
    orderBy: {
      created_at: 'desc',
    },
  })
}

export async function getProductById(id: number) {
  return prisma.product.findUnique({
    where: { id },
  })
}

export async function getProductsByCategory(category: string) {
  return prisma.product.findMany({
    where: { category },
    orderBy: {
      created_at: 'desc',
    },
  })
}

export async function searchProducts(query: string) {
  return prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      created_at: 'desc',
    },
  })
}
