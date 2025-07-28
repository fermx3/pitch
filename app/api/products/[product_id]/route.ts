import { getProductById } from '@/lib/products';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { product_id: string } }
) {
  const response = await params;
  const id = Number(response.product_id);
  if (isNaN(id)) {
    return new Response("Invalid product id", { status: 400 });
  }
  const product = await getProductById(id);
  return Response.json(product);
}
