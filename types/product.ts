export type ProductType = {
  id: number;
  name: string;
  description?: string | undefined | null;
  short_description?: string | null;
  price: number;
  image_url?: string | null;
  category: {
    id: number;
    name: string;
    slug: string;
  } | null;
  is_top_product: boolean;
  stock: number;
  sku?: string | null;
  bodega_id: number;
  precio_en_oferta?: number | null;
  product_weight_g?: number | null;
  product_length_cm?: number | null;
  product_heihgt_cm?: number | null;
  product_width_cm?: number | null;
  created_at: Date;
};
