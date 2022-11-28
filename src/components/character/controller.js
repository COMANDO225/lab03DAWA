import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const host = process.env.HOST

export const getCharacters = async (req, res) => {
    try {
        let { nombre, edad, movies } = req.query;
        if (nombre) {
            const characters = await prisma.character.findMany({
                include: {
                    movies: true,
                },
                where: {
                    nombre: {
                        equals: nombre,
                    },
                },
            });
            res.status(200).json(characters);
        }
        if (edad) {
            const characters = await prisma.character.findMany({
                include: {
                    movies: true,
                },
                where: {
                    edad: {
                        equals: Number(edad),
                    },
                },
            });
            res.status(200).json(characters);
        }
        if (movies) {
            const characters = await prisma.character.findMany({
                include: {
                    movies: true,
                },
                where: {
                    movies: {
                        some: {
                            id: Number(movies),
                        }
                    }
                }
            });
            res.status(200).json(characters);
        }
        if (!nombre && !edad && !movies) {
            const characters = await prisma.character.findMany();
            const charactersFiltrados = characters.map((character) => {

                const detalleMasna = `${host}/characters/${character.id}/detail`;
                return {
                    id: character.id,
                    nombre: character.nombre,
                    imagen: character.imagen,
                    detalle: detalleMasna
                };
            });
            res.status(200).json(charactersFiltrados);
        }
    } catch (error) {
        res.json({ message: error });
    }
}

export const getCharacterFullInfoMasna = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const character = await prisma.character.findUnique({
            include: {
                movies: true,
            },
            where: {
                id: id,
            },
        });
        res.status(200).json(character);
    } catch (error) {
        res.json({ message: error });
    }
}

export const crearCharacter = async (req, res) => {
    try {
        // ahora agregaremos "movies" de la desestructuracion del req.body
        const { nombre, imagen, edad, peso, historia, movies } = req.body;
        // como mandaremos las movies que es un array de solo id's tocara buscar 
        // entre las peliculas el id y obtener el objeto pelicula.
        const film = await prisma.film.findMany({
            where: {
                id: {
                    in: movies
                }
            }
        });
        // editaremos esta parte donde movies es un array de objetos peliculas 
        // hacemos map y ya quedo fino
        const character = await prisma.character.create({
            data: {
                nombre,
                imagen,
                edad: Number(edad),
                peso: Number(peso),
                historia,
                movies: {
                    connect: film.map((film) => ({
                        id: film.id
                    }))
                }
            }
        });
        res.status(201).json(character);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const editarCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, imagen, edad, peso, historia, movies } = req.body;
        const film = await prisma.film.findMany({
            where: {
                id: {
                    in: movies
                }
            }
        });
        const character = await prisma.character.update({
            // donde el id sea igual al id que viene en el params
            where: {
                id: Number(id),
            },
            // y actualizamos los datos que vienen en el body masna
            data: {
                nombre,
                imagen,
                edad: Number(edad),
                peso: Number(peso),
                historia,
                movies: {
                    connect: film.map((film) => ({
                        id: film.id,
                    }))
                }
            }
        });
        res.status(200).json(character);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export const eliminarCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await prisma.character.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(200).json(character);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}