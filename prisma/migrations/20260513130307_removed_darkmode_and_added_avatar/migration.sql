/*
  Warnings:

  - You are about to drop the column `DarkMode` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "DarkMode",
ADD COLUMN     "Avatar" TEXT;
