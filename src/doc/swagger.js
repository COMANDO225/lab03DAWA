import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API Documentation by Almeyda",
        version: "0.0.1 - masna",
    },
    servers: [{
        url: "http://localhost:6005/",
    }],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            user: {
                type: "object",
                required: ["nombre", "correo", "password", "confPassword"],
                properties: {
                    nombre: {
                        type: "string",
                        description: "Nombre del usuario",
                    },
                    correo: {
                        type: "string",
                        description: "Correo del usuario",
                    },
                    password: {
                        type: "string",
                        description: "Contraseña del usuario",
                    },
                    confPassword: {
                        type: "string",
                        description: "Confirmación de la contraseña",
                    },
                }
            },
            userLogin: {
                type: "object",
                required: ["correo", "password"],
                properties: {
                    correo: {
                        type: "string",
                        description: "Correo del usuario",
                    },
                    password: {
                        type: "string",
                        description: "Contraseña del usuario",
                    }
                }
            },
            character: {
                type: "object",
                required: ["nombre", "peso", "imagen"],
                properties: {
                    nombre: {
                        type: "string",
                        description: "Nombre del personaje",
                        example: "Anderson",
                    },
                    imagen: {
                        type: "string",
                        description: "Imagen del personaje",
                        example: "https://res.cloudinary.com/dro4ur0kq/image/upload/v1669591479/kokun_upmaca.png",
                    },
                    edad: {
                        type: "integer",
                        description: "Edad del personaje",
                        example: 22,
                    },
                    peso: {
                        type: "float",
                        description: "Peso del personaje",
                        example: 66,
                    },
                    historia: {
                        type: "string",
                        description: "The History del personaje",
                        example: 'Erase una vez un causa que se llamaba Anderson... lorem ipsum dolor sit amet...',
                    },
                }
            },
            film: {
                type: "object",
                required: ["titulo", "fechaCreacion", "calificacion", "imagen"],
                properties: {
                    titulo: {
                        type: "string",
                        description: "Titulo de la pelicula",
                    },
                    fechaCreacion: {
                        type: "string",
                        description: "Fecha de creacion de la pelicula",
                    },
                    calificacion: {
                        type: "integer",
                        description: "Calificacion de la pelicula minimo 1 maximo 5",
                        example: 1,
                    },
                    imagen: {
                        type: "string",
                        description: "Imagen de la pelicula masna",
                    },
                    // personajes: {
                    //     type: "array",
                    //     items: {
                    //         type: "integer",
                    //     }
                    // }
                }
            },
            genre: {
                type: "object",
                required: ["nombre"],
                properties: {
                    nombre: {
                        type: "string",
                        description: "Nombre del genero",
                    },
                    imagen: {
                        type: "string",
                        description: "Imagen del genero",
                    },
                }
            }
        }
    }
}

const options = {
    swaggerDefinition,
    apis: ["./src/components/**/*.js"],
}

export default swaggerJSDoc(options);