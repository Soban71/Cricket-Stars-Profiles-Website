/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `CricketInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `playerName` VARCHAR(191) NOT NULL,
    `teamName` VARCHAR(191) NOT NULL,
    `battingAverage` DOUBLE NOT NULL,
    `bowlingAverage` DOUBLE NOT NULL,
    `totalMatches` INTEGER NOT NULL,
    `totalRuns` INTEGER NOT NULL,
    `totalWickets` INTEGER NOT NULL,
    `highestScore` INTEGER NOT NULL,
    `bestBowling` VARCHAR(191) NOT NULL,
    `debutYear` VARCHAR(191) NOT NULL,
    `lastMatch` DATETIME(3) NOT NULL,
    `playerImage` VARCHAR(191) NOT NULL,
    `jerseyNumber` INTEGER NOT NULL,
    `playingRole` VARCHAR(191) NOT NULL,
    `battingStyle` VARCHAR(191) NOT NULL,
    `bowlingStyle` VARCHAR(191) NOT NULL,
    `fieldingPosition` VARCHAR(191) NOT NULL,
    `captain` BOOLEAN NOT NULL,
    `internationalMatches` INTEGER NOT NULL,
    `domesticMatches` INTEGER NOT NULL,
    `awards` VARCHAR(191) NOT NULL,
    `records` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- RedefineIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
DROP INDEX `User.email_unique` ON `User`;
