/*
  Warnings:

  - You are about to drop the column `age` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `battingAverage` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `bowlingAverage` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `fifties` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `hundereds` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `playerRole` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `shirtNumber` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `teamName` on the `CricketerInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `CricketerInfo` DROP COLUMN `age`,
    DROP COLUMN `battingAverage`,
    DROP COLUMN `bowlingAverage`,
    DROP COLUMN `fifties`,
    DROP COLUMN `hundereds`,
    DROP COLUMN `image`,
    DROP COLUMN `playerRole`,
    DROP COLUMN `shirtNumber`,
    DROP COLUMN `teamName`,
    ADD COLUMN `country` VARCHAR(191) NULL,
    ADD COLUMN `role` VARCHAR(191) NULL,
    ADD COLUMN `runs` VARCHAR(191) NULL,
    ADD COLUMN `wickets` VARCHAR(191) NULL,
    MODIFY `playerName` VARCHAR(191) NULL,
    MODIFY `matches` VARCHAR(191) NULL;
