/*
  Warnings:

  - Added the required column `dropOffLocation` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickUpLocation` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeDroppedOff` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timePickedUp` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "dropOffLocation" TEXT NOT NULL,
ADD COLUMN     "pickUpLocation" TEXT NOT NULL,
ADD COLUMN     "timeDroppedOff" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "timePickedUp" TIMESTAMP(3) NOT NULL;
