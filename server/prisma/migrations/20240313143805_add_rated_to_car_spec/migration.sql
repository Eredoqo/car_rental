/*
  Warnings:

  - Added the required column `rated` to the `CarSpec` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarSpec" ADD COLUMN     "rated" INTEGER NOT NULL;
