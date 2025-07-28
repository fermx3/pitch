import { getProductById } from '@/lib/products';

export async function GET(
  { params }: { params: { product_id: string } }
) {
  const id = Number(params.product_id);
  if (isNaN(id)) {
    return new Response("Invalid product id", { status: 400 });
  }
  const product = await getProductById(id);
  return Response.json(product);
}
