-- AlterTable
ALTER TABLE "Bodega" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "direccion" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "telefono" TEXT;
