/*
  Warnings:

  - You are about to alter the column `matches` on the `CricketerInfo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `runs` on the `CricketerInfo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `wickets` on the `CricketerInfo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `CricketerInfo` MODIFY `matches` INTEGER NULL,
    MODIFY `runs` INTEGER NULL,
    MODIFY `wickets` INTEGER NULL;
