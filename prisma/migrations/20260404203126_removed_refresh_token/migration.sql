/*
  Warnings:

  - You are about to drop the column `Refresh_Token` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_Refresh_Token_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "Refresh_Token";
