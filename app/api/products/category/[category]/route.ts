import { getProductsByCategory } from '@/lib/products';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  const products = await getProductsByCategory(category);
  return Response.json(products);
}
