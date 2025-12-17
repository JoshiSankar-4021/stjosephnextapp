/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Register` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Register` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Register" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Register_email_key" ON "Register"("email");
