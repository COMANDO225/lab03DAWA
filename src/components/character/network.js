import { Router } from "express";
import { crearCharacter, getCharacters, getCharacterFullInfoMasna, editarCharacter, eliminarCharacter } from "./controller";

const persoRouter = Router();

/** 
 * @swagger
 * tags:
 *  name: Personajes (Characters)
 *  description: API para los personajes o Characters en inglish
 */

/**
 * @swagger
 * /characters:
 *      get:
 *          tags:
 *             - Personajes (Characters)
 *          summary: Obtiene todos los personajes (imagen y nombre)
 *          responses:
 *             200:
 *                 description: Personajes obtenidos
*/
/**
 * @swagger
 * /characters?nombre={nombre}:
 *  get:
 *   tags:
 *    - Personajes (Characters)
 *   summary: Filtrar personajes por nombre
 *   description: Obten una lista de personajes filtradas por nombre
 *   parameters:
 *    - in: path
 *      name: nombre
 *      schema:
 *       type: string
 *      required: true
 *      description: Ingresa el nombre del personaje que deseas buscar mi chamo
 *   responses:
 *    200:
 *     description: personajes filtradas por nombre
 *    404:
 *     description: No se encontraron personajes con ese nombre
*/
/**
 * @swagger
 * /characters?edad={edad}:
 *  get:
 *   tags:
 *    - Personajes (Characters)
 *   summary: Filtrar personajes por edad
 *   description: Obten una lista de personajes filtradas por su edad
 *   parameters:
 *    - in: path
 *      name: edad
 *      schema:
 *       type: string
 *      required: true
 *      description: Ingresa la edad del personaje que deseas buscar mi chamo
 *   responses:
 *    200:
 *     description: personajes filtradas por edad
 *    404:
 *     description: No se encontraron personajes con esa edad
*/
/**
 * @swagger
 * /characters?movies={idMovie}:
 *  get:
 *   tags:
 *    - Personajes (Characters)
 *   summary: Filtrar personajes por id de pelicula
 *   description: Obten una lista de personajes filtradas por el id de la pelicula
 *   parameters:
 *    - in: path
 *      name: idMovie
 *      schema:
 *       type: string
 *      required: true
 *      description: Ingresa el id de la pelicula que deseas buscar mi chamo
 *   responses:
 *    200:
 *     description: personajes filtradas por id de una pelicula
 *    404:
 *     description: No se encontraron personajes con ese id de pelicula
*/
persoRouter.get("/", getCharacters);

/**
 * @swagger
 * /characters/{id}/detail:
 *  get:
 *   tags:
 *    - Personajes (Characters)
 *   summary: Obtiene la información completa de un personaje
 *   description: Con esta ruta se puede obtener la información completa de un personaje asi como ver sus peliculas o series
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: El id del personaje
 *   responses:
 *    200:
 *     description: Personajes obtenidos
*/
persoRouter.get("/:id/detail", getCharacterFullInfoMasna);

/**
 * Post track
 * @swagger
 * /characters:
 *      post:
 *          tags:
 *             - Personajes (Characters)
 *          summary: Crear un personaje
 *          description: Con esta ruta se puede crear un personaje masna
 *          requestBody:
 *             content:
 *                application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/character'
 *          responses:
 *            200:
 *              description: Todo salio bien mi king
 *            400:
 *              description: Deja la programación y vete al cuartel
 *            500:
 *              description: Error del servidor uu
 *          security:
 *             - bearerAuth: []
 */
persoRouter.post("/", crearCharacter);

/**
 * @swagger
 * /characters/{id}:
 *  put:
 *   tags:
 *    - Personajes (Characters)
 *   summary: Edita un personaje
 *   description: Con esta ruta se puede editar un personaje masna
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: El id del personaje
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/character'
 *   responses:
 *    200:
 *     description: Personaje editado
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 *   security:
 *    - bearerAuth: []
 */
persoRouter.put("/:id", editarCharacter);

/**
 * @swagger
 * /characters/{id}:
 *  delete:
 *   tags:
 *    - Personajes (Characters)
 *   summary: Elimina un personaje
 *   description: Con esta ruta se puede eliminar un personaje masna
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: El id del personaje papu
 *   responses:
 *    200:
 *     description: Personaje eliminado causa uu
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 */
persoRouter.delete("/:id", eliminarCharacter);



export default persoRouter;
