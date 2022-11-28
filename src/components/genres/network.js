import { Router } from "express";
import { getGenres, crearGenre, editarGenre, eliminarGenre } from "./controller";

const genreRouter = Router();

genreRouter.get("/", getGenres);
genreRouter.post("/", crearGenre);
genreRouter.put("/:id", editarGenre);
genreRouter.delete("/:id", eliminarGenre);
/** 
 * @swagger
 * tags:
 *  name: Generos (Genres)
 *  position: 2
 *  description: API genero de peliculas o series
 */
/**
 * @swagger
 * /generos:
 *  get:
 *   tags:
 *    - Generos (Genres)
 *   summary: Lista de generos
 *   description: Obten la lista de generos
 *   responses:
 *    200:
 *     description: Generos obtenidos
*/
/**
 * @swagger
 * /generos:
 *  post:
 *   tags:
 *    - Generos (Genres)
 *   summary: Crea un genero
 *   description: Con esta ruta se puede crear un genero nuevo
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/genre'
 *   responses:
 *    201:
 *     description: Genero creado
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 *   security:
 *    - bearerAuth: []
 */
/**
 * @swagger
 * /generos/{id}:
 *  put:
 *   tags:
 *    - Generos (Genres)
 *   summary: Edita un genero existente
 *   description: Con esta ruta se puede editar un genero existente
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: El id del genero
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/genre'
 *   responses:
 *    201:
 *     description: Genero Editado causa
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 *   security:
 *    - bearerAuth: []
 */
/**
 * @swagger
 * /generos/{id}:
 *  delete:
 *   tags:
 *    - Generos (Genres)
 *   summary: Elimina un genero existente
 *   description: Con esta ruta se puede eliminar de la existencia a un genero existente
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: Coloca el id del genero que quieres eliminar
 *   responses:
 *    200:
 *     description: Genero eliminado causa uu
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 *   security:
 *    - bearerAuth: []
 */

export default genreRouter;