/*
  Warnings:

  - You are about to drop the column `awards` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `battingStyle` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `bestBowling` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `bowlingStyle` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `captain` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `debutYear` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `domesticMatches` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `fieldingPosition` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `highestScore` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `internationalMatches` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `jerseyNumber` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `lastMatch` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `playerImage` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `playingRole` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `records` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `totalMatches` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `totalRuns` on the `CricketerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `totalWickets` on the `CricketerInfo` table. All the data in the column will be lost.
  - Added the required column `age` to the `CricketerInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fifties` to the `CricketerInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hundereds` to the `CricketerInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matches` to the `CricketerInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerRole` to the `CricketerInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shirtNumber` to the `CricketerInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CricketerInfo` DROP COLUMN `awards`,
    DROP COLUMN `battingStyle`,
    DROP COLUMN `bestBowling`,
    DROP COLUMN `bowlingStyle`,
    DROP COLUMN `captain`,
    DROP COLUMN `debutYear`,
    DROP COLUMN `domesticMatches`,
    DROP COLUMN `fieldingPosition`,
    DROP COLUMN `highestScore`,
    DROP COLUMN `internationalMatches`,
    DROP COLUMN `jerseyNumber`,
    DROP COLUMN `lastMatch`,
    DROP COLUMN `playerImage`,
    DROP COLUMN `playingRole`,
    DROP COLUMN `records`,
    DROP COLUMN `totalMatches`,
    DROP COLUMN `totalRuns`,
    DROP COLUMN `totalWickets`,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `fifties` VARCHAR(191) NOT NULL,
    ADD COLUMN `hundereds` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `matches` VARCHAR(191) NOT NULL,
    ADD COLUMN `playerRole` VARCHAR(191) NOT NULL,
    ADD COLUMN `shirtNumber` INTEGER NOT NULL;
