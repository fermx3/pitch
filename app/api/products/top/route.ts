import { getTopProducts } from '@/lib/products';

export async function GET() {
  const products = await getTopProducts();
  return Response.json(products);
}
