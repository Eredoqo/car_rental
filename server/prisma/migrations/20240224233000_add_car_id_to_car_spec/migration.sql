/*
  Warnings:

  - A unique constraint covering the columns `[carId]` on the table `CarSpec` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carId` to the `CarSpec` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarSpec" ADD COLUMN     "carId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CarSpec_carId_key" ON "CarSpec"("carId");

-- AddForeignKey
ALTER TABLE "CarSpec" ADD CONSTRAINT "CarSpec_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
