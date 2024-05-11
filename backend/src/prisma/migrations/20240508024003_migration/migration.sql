/*
  Warnings:

  - You are about to drop the `CricketInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Rating` DROP FOREIGN KEY `Rating_playerId_fkey`;

-- DropTable
DROP TABLE `CricketInfo`;

-- CreateTable
CREATE TABLE `CricketerInfo` (
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

-- AddForeignKey
ALTER TABLE `Rating` ADD CONSTRAINT `Rating_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `CricketerInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
