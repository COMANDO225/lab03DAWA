import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getGenres = async (req, res) => {
    try {
        const genres = await prisma.genre.findMany();
        // aqui obtendre las pelis por medio de pisma client
        const films = await prisma.film.findMany();
        // con eso llamare a las peliculas y estas ya tienen su genreId y con eso
        // puedo hacerles crear un nuevo objeto en donde me lista las peliculas que tengan
        // el mismo id del genero con el genreId masnaa
        const genresFiltrados = genres.map((genre) => {
            return {
                id: genre.id,
                nombre: genre.nombre,
                imagen: genre.imagen,
                films: films.filter((film) => film.genreId === genre.id),
            };
        });
        // mando como response los el nuevo objeto
        res.status(200).json(genresFiltrados);
        // res.status(200).json(genres);
    } catch (error) {
        res.json({ message: error });
    }
}

export const crearGenre = async (req, res) => {
    try {
        const { nombre, imagen } = req.body;
        const genre = await prisma.genre.create({
            data: {
                nombre,
                imagen,
            },
        });
        res.status(201).json(genre);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const editarGenre = async (req, res) => {
    try {
        const idMasna = Number(req.params.id);
        const { nombre, imagen } = req.body;
        const genre = await prisma.genre.update({
            where: {
                id: idMasna,
            },
            data: {
                nombre,
                imagen,
            },
        });
        res.status(200).json(genre);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const eliminarGenre = async (req, res) => {
    try {
        const idMasna = Number(req.params.id);
        const genre = await prisma.genre.delete({
            where: {
                id: idMasna,
            },
        });
        res.status(200).json(genre);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}