/*
  Warnings:

  - Added the required column `line` to the `bcos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bcos" ADD COLUMN     "line" TEXT NOT NULL,
ALTER COLUMN "startTime" SET DATA TYPE TEXT,
ALTER COLUMN "endTime" SET DATA TYPE TEXT;
