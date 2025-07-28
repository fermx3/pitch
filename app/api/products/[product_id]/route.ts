import { getProductById } from '@/lib/products';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { product_id: string } }
) {
  const { product_id } = await params;

  const id = Number(product_id);

  if (isNaN(id)) {
    return new Response("Invalid product id", { status: 400 });
  }
  const product = await getProductById(id);
  return Response.json(product);
}
