/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bodega_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "createdAt",
DROP COLUMN "imageUrl",
DROP COLUMN "shortDescription",
ADD COLUMN     "bodega_id" INTEGER NOT NULL,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image_url" TEXT,
ADD COLUMN     "precio_en_oferta" DOUBLE PRECISION,
ADD COLUMN     "product_heihgt_cm" DOUBLE PRECISION,
ADD COLUMN     "product_length_cm" DOUBLE PRECISION,
ADD COLUMN     "product_weight_g" DOUBLE PRECISION,
ADD COLUMN     "product_width_cm" DOUBLE PRECISION,
ADD COLUMN     "short_description" TEXT,
ADD COLUMN     "sku" TEXT,
ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Bodega" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Bodega_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_bodega_id_fkey" FOREIGN KEY ("bodega_id") REFERENCES "Bodega"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
