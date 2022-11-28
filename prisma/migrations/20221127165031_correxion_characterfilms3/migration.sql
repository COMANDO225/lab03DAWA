/*
  Warnings:

  - You are about to drop the `_characterfilm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_characterfilm` DROP FOREIGN KEY `_CharacterFilm_A_fkey`;

-- DropForeignKey
ALTER TABLE `_characterfilm` DROP FOREIGN KEY `_CharacterFilm_B_fkey`;

-- DropTable
DROP TABLE `_characterfilm`;

-- CreateTable
CREATE TABLE `_CharacterToFilm` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CharacterToFilm_AB_unique`(`A`, `B`),
    INDEX `_CharacterToFilm_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CharacterToFilm` ADD CONSTRAINT `_CharacterToFilm_A_fkey` FOREIGN KEY (`A`) REFERENCES `characters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CharacterToFilm` ADD CONSTRAINT `_CharacterToFilm_B_fkey` FOREIGN KEY (`B`) REFERENCES `films`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
