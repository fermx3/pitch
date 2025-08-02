import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';

  try {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error || "Failed to search products" }, { status: 500 });
  }
}
