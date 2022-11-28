import { Router } from "express";
import { getUsers, getUser, crearUsuario, loginUsuario } from "./controller";

const userRouter = Router();
/** 
 * @swagger
 * tags:
 *  name: Auth
 *  position: 1
 *  description: API para autenticación de usuarios
 */


userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);

/**
 * @swagger
 * /auth/register:
 *  post:
 *   tags:
 *    - Auth
 *   summary: Crear un usuario
 *   description: Con esta ruta se puede crear un usuario nuevo
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/user'
 *   responses:
 *    201:
 *     description: Usuario creado
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 */
userRouter.post("/register", crearUsuario);

/**
 * @swagger
 * /auth/login:
 *  post:
 *   tags:
 *    - Auth
 *   summary: Login de usuario
 *   description: Con esta ruta se puede loguear un usuario
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/userLogin'
 *   responses:
 *    201:
 *     description: Usuario creado
 *    400:
 *     description: Deja la programación y vete al cuartel
 *    500:
 *     description: Error del servidor uu
 */
userRouter.post("/login", loginUsuario);

export default userRouter;
