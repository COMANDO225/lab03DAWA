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
CREATE TABLE `characters_films` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `personajeId` INTEGER NOT NULL,
    `peliculaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `characters_films` ADD CONSTRAINT `characters_films_personajeId_fkey` FOREIGN KEY (`personajeId`) REFERENCES `characters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `characters_films` ADD CONSTRAINT `characters_films_peliculaId_fkey` FOREIGN KEY (`peliculaId`) REFERENCES `films`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
