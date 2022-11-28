import { Router } from "express";
import { getFilms, getFilmFullInfoMasna, crearFilm, editarFilm, eliminarFilm } from "./controller";

const filmRouter = Router();

/** 
 * @swagger
 * tags:
 *  name: Movies (Films)
 *  description: API para los peliculas o series
 */

/**
 * @swagger
 * /movies:
 *  get:
 *   tags:
 *    - Movies (Films)
 *   summary: Lista de peliculas (titulo, imagen y fecha de creación)
 *   description: Obten la lista de peliculas (Titulo, imagen y fecha de creación)
 *   responses:
 *    200:
 *     description: Peliculas obtenidas
*/
/**
 * @swagger
 * /movies?nombre={nombre}:
 *  get:
 *   tags:
 *    - Movies (Films)
 *   summary: Filtrar peliculas por nombre
 *   description: Obten una lista de peliculas filtradas por nombre
 *   parameters:
 *    - in: path
 *      name: nombre
 *      schema:
 *       type: string
 *      required: true
 *      description: El nombre de la pelicula
 *   responses:
 *    200:
 *     description: peliculas filtradas por nombre
 *    404:
 *     description: No se encontraron peliculas con ese nombre
*/
/**
 * @swagger
 * /movies?genero={generoId}:
 *  get:
 *   tags:
 *    - Movies (Films)
 *   summary: Filtrar peliculas por genero
 *   description: Obten una lista de peliculas filtradas por genero segun el id
 *   parameters:
 *    - in: path
 *      name: generoId
 *      schema:
 *       type: string
 *      required: true
 *      description: El id del genero
 *   responses:
 *    200:
 *     description: peliculas filtradas por genero
 *    404:
 *     description: No se encontraron peliculas con ese genero
*/
/**
 * @swagger
 * /movies?order={order}:
 *  get:
 *   tags:
 *    - Movies (Films)
 *   summary: Ordenar peliculas
 *   description: Ordena las peliculas de forma ascendente o descendente las peliculas
 *   parameters:
 *    - in: path
 *      name: order
 *      schema:
 *       type: string
 *      required: true
 *      description: El orden de las peliculas (asc o desc)
 *   responses:
 *    200:
 *     description: peliculas ordenadas
*/
filmRouter.get("/", getFilms);

/**
 * @swagger
 * /movies/{id}/detail:
 *  get:
 *   tags:
 *    - Movies (Films)
 *   summary: Obtiene la información completa de una pelicula
 *   description: Con esta ruta se puede obtener la información completa de una pelicula asi como ver sus personajes y genero
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: El id de la pelicula
 *   responses:
 *    200:
 *     description: Pelicula obtenida
*/
filmRouter.get("/:id/detail", getFilmFullInfoMasna);

/**
 * @swagger
 * /movies:
 *  post:
 *   tags:
 *    - Movies (Films)
 *   summary: Crea una pelicula
 *   description: Con esta ruta se puede crear una rica pelicula
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/film'
 *   responses:
 *    201:
 *     description: Pelicula creada
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 *   security:
 *    - bearerAuth: []
 */
filmRouter.post("/", crearFilm);

/**
 * @swagger
 * /movies/{id}:
 *  put:
 *   tags:
 *    - Movies (Films)
 *   summary: Edita una pelicula
 *   description: Con esta ruta se puede editar una pelicula masna
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: El id de la pelicula
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/film'
 *   responses:
 *    200:
 *     description: Pelicula editado
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 *   security:
 *    - bearerAuth: []
 */
filmRouter.put("/:id", editarFilm);

/**
 * @swagger
 * /movies/{id}:
 *  delete:
 *   tags:
 *    - Movies (Films)
 *   summary: Elimina una pelicula
 *   description: Con esta ruta se puede eliminar una pelicula masna
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: Coloca el id de la pelicula a eliminar mi chamo
 *   responses:
 *    200:
 *     description: Pelicula eliminado causa uu
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 *   security:
 *    - bearerAuth: []
 */
filmRouter.delete("/:id", eliminarFilm);

export default filmRouter;