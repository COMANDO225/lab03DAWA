/*
  Warnings:

  - You are about to drop the `_charactertofilm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_charactertofilm` DROP FOREIGN KEY `_CharacterToFilm_A_fkey`;

-- DropForeignKey
ALTER TABLE `_charactertofilm` DROP FOREIGN KEY `_CharacterToFilm_B_fkey`;

-- DropTable
DROP TABLE `_charactertofilm`;

-- CreateTable
CREATE TABLE `_CharacterFilm` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CharacterFilm_AB_unique`(`A`, `B`),
    INDEX `_CharacterFilm_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CharacterFilm` ADD CONSTRAINT `_CharacterFilm_A_fkey` FOREIGN KEY (`A`) REFERENCES `characters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CharacterFilm` ADD CONSTRAINT `_CharacterFilm_B_fkey` FOREIGN KEY (`B`) REFERENCES `films`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
