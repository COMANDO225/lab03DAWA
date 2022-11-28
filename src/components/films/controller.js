import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const host = process.env.HOST

export const getFilms = async (req, res) => {
    try {
        let { titulo, nombre, order, genero } = req.query;
        if (titulo || nombre) {
            const films = await prisma.film.findMany({
                include: {
                    personajes: true,
                },
                where: {
                    titulo: {
                        contains: titulo || nombre,
                    },
                },
            });
            res.status(200).json(films);
        }
        if (genero) {
            const films = await prisma.film.findMany({
                include: {
                    personajes: true,
                },
                where: {
                    genreId: {
                        equals: Number(genero),
                    }
                }
            });
            res.status(200).json(films);
        }
        if (!titulo && !genero && !nombre) {
            if (order === "asc") {
                const films = await prisma.film.findMany({
                    include: {
                        personajes: true,
                    },
                    orderBy: {
                        titulo: "asc",
                    },
                });
                const filmsFiltrados = films.map((film) => {
                    const detalleMasna = `${host}/movies/${film.id}/detail`;
                    return {
                        id: film.id,
                        titulo: film.titulo,
                        imagen: film.imagen,
                        fechaCreacion: film.fechaCreacion,
                        detalle: detalleMasna,
                    };
                });
                res.status(200).json(filmsFiltrados);
                // res.status(200).json(films);
            } else if (order === "desc") {
                const films = await prisma.film.findMany({
                    include: {
                        personajes: true,
                    },
                    orderBy: {
                        titulo: "desc",
                    },
                });
                const filmsFiltrados = films.map((film) => {
                    const detalleMasna = `${host}/movies/${film.id}/detail`;
                    return {
                        id: film.id,
                        titulo: film.titulo,
                        imagen: film.imagen,
                        fechaCreacion: film.fechaCreacion,
                        detalle: detalleMasna,
                    };
                });
                res.status(200).json(filmsFiltrados);
            } else {
                const films = await prisma.film.findMany({
                    include: {
                        personajes: true,
                    },
                });
                const filmsFiltrados = films.map((film) => {
                    const detalleMasna = `${host}/movies/${film.id}/detail`;
                    return {
                        id: film.id,
                        titulo: film.titulo,
                        imagen: film.imagen,
                        fechaCreacion: film.fechaCreacion,
                        detalle: detalleMasna,
                    };
                });
                res.status(200).json(filmsFiltrados);
            }
        }
        // res.status(200).json(films);
    } catch (error) {
        res.json({ message: error });
    }
}

export const getFilmFullInfoMasna = async (req, res) => {
    try {
        const { id } = req.params;
        const film = await prisma.film.findUnique({
            include: {
                personajes: true,
            },
            where: {
                id: Number(id),
            },
        });
        res.status(200).json(film);
    } catch (error) {
        res.json({ message: error });
    }
}

export const crearFilm = async (req, res) => {
    try {
        const { titulo, imagen, fechaCreacion, calificacion, genreId } = req.body;
        if (Number(calificacion) > 5 || Number(calificacion) < 1) {
            res.status(400).json({ message: "La calificación debe ser maximo 5 y el minimo es 1 mi king" });
        }
        const film = await prisma.film.create({
            data: {
                titulo,
                imagen,
                fechaCreacion,
                calificacion: Number(calificacion),
                genreId: Number(genreId),
            },
        });
        res.status(201).json(film);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const editarFilm = async (req, res) => {
    try {
        const { titulo, imagen, fechaCreacion, calificacion, genreId } = req.body;
        if (Number(calificacion) > 5 || Number(calificacion) < 1) {
            res.status(400).json({ message: "La calificación debe ser maximo 5 y el minimo es 1 mi king" });
        }
        const film = await prisma.film.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                titulo,
                imagen,
                fechaCreacion,
                calificacion: Number(calificacion),
                genreId: Number(genreId),
            },
        });
        res.status(201).json(film);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const eliminarFilm = async (req, res) => {
    try {
        const { id } = req.params;
        const film = await prisma.film.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(200).json(film);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}