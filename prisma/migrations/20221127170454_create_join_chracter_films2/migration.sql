/*
  Warnings:

  - You are about to drop the `characters_films` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `characters_films` DROP FOREIGN KEY `characters_films_peliculaId_fkey`;

-- DropForeignKey
ALTER TABLE `characters_films` DROP FOREIGN KEY `characters_films_personajeId_fkey`;

-- DropTable
DROP TABLE `characters_films`;

-- CreateTable
CREATE TABLE `CharactersOnFilms` (
    `filmId` INTEGER NOT NULL,
    `characterId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`filmId`, `characterId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CharactersOnFilms` ADD CONSTRAINT `CharactersOnFilms_filmId_fkey` FOREIGN KEY (`filmId`) REFERENCES `films`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharactersOnFilms` ADD CONSTRAINT `CharactersOnFilms_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `characters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
