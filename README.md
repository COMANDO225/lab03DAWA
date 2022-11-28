# CHALLENGE BACKEND - NodeJs 🚀
![image](https://user-images.githubusercontent.com/51338520/204173943-ed57fad8-f1c4-4a57-b5f3-57e5eb315f45.png)


## Objetivo

Desarrollar una API para explorar el mundo de Disney, la cual permitirá conocer y modificar los personajes que lo componen y entender en qué películas estos participaron. Por otro lado, deberá exponer la información para que cualquier frontend pueda consumirla.

👉 Utilizar NodeJs y Express.
![image](https://user-images.githubusercontent.com/51338520/204174620-5a0384a6-ce11-4d95-8c11-f0643f19e1d9.png)
👉 No es necesario armar el Frontend.

👉 Las rutas deberán seguir el patrón REST.
![image](https://user-images.githubusercontent.com/51338520/204174806-4ac83909-910a-40ad-be69-87afbdce1415.png)


👉 Utilizar la librería Prisma.
![image](https://user-images.githubusercontent.com/51338520/204174699-44233dc3-cb21-4d29-b2ff-fa762686dac2.png)

![image](https://user-images.githubusercontent.com/51338520/204174765-749f55ee-86e0-4b4a-897c-25c95e02740d.png)


⚠️ ¡No es indispensable hacer todo!
Mientras más completes, mayor puntaje obtendrás, pero puedes enviar la app hasta el estadío que la tengas en base a tu conocimiento actual. Recuerda que el objetivo del challenge es entender tu nivel de conocimiento actual.

## Requerimientos técnicos

**1. Modelado de Base de Datos**

- Personaje: deberá tener
  - Imagen.
  - Nombre.
  - Edad.
  - Peso.
  - Historia.
  - Películas o series asociadas.
- Película o Serie: deberá tener,
  - Imagen.
  - Título.
  - Fecha de creación.
  - Calificación (del 1 al 5).
  - Personajes asociados.
- Género: deberá tener,
  - Nombre.
  - Imagen.
  - Películas o series asociadas.
  
  ![image](https://user-images.githubusercontent.com/51338520/204174856-f4d5b71d-0529-44e1-b43e-40a0881a14ee.png)


**2. Autenticación de Usuarios**

Para realizar peticiones a los endpoints subsiguientes el usuario deberá contar con un token que obtendrá al autenticarse. Para ello, deberán desarrollarse los endpoints de registro y login, que permitan obtener el token.

Los endpoints encargados de la autenticación deberán ser:

- /auth/login
- /auth/register

![image](https://user-images.githubusercontent.com/51338520/204174932-5a3a4812-bd9c-4c8a-a84d-399ac0d31b98.png)



**3. Listado de Personajes**

El listado deberá mostrar:

- Imagen.
- Nombre.

![image](https://user-images.githubusercontent.com/51338520/204174006-3b5013fc-4fe0-44b0-8bf2-c2143533441c.png)

El endpoint deberá ser:

- /characters

**4. Creación, Edición y Eliminación de Personajes (CRUD)**

Deberán existir las operaciones básicas de creación, edición y eliminación de personajes.

![image](https://user-images.githubusercontent.com/51338520/204174087-ee849c6a-86f7-45c6-9ccc-e9c1567146ed.png)

**5. Detalle de Personaje**

En el detalle deberán listarse todos los atributos del personaje, como así también sus películas o series relacionadas.

![image](https://user-images.githubusercontent.com/51338520/204174113-49d9daa1-a625-4109-abb3-4282637bee1f.png)

**6. Búsqueda de Personajes**

Deberá permitir buscar por nombre, y filtrar por edad, peso o películas/series en las que participó. Para especificar el término de búsqueda o filtros se deberán enviar como parámetros de query:

- GET /characters?name=nombre
![image](https://user-images.githubusercontent.com/51338520/204174130-74ebbc4d-a0bf-444f-a0c3-a1dd1287803a.png)

- GET /characters?age=edad
![image](https://user-images.githubusercontent.com/51338520/204174142-2f17c460-41d2-4b7a-b227-9b55966c2241.png)

- GET /characters?movies=idMovie
![image](https://user-images.githubusercontent.com/51338520/204174155-164c5e13-829e-446a-b21b-80ae5b614370.png)


**7. Listado de Películas**

Deberá mostrar solamente los campos imagen, título y fecha de creación.

El endpoint deberá ser:

- GET /movies
![image](https://user-images.githubusercontent.com/51338520/204174209-b0922a73-a2ec-458d-a1a0-9a5e5fbcee15.png)


**8. Detalle de Película / Serie con sus personajes**

Devolverá todos los campos de la película o serie junto a los personajes asociados a la misma
![image](https://user-images.githubusercontent.com/51338520/204174224-dde5c8d6-1b88-43c1-ba8d-78d4367cae71.png)

**9. Creación, Edición y Eliminación de Película / Serie**

Deberán existir las operaciones básicas de creación, edición y eliminación de películas o series.
![image](https://user-images.githubusercontent.com/51338520/204174286-45565eaf-70b2-4499-bfa9-e007dc806d48.png)


**10. Búsqueda de Películas o Series**

Deberá permitir buscar por título, y filtrar por género. Además, permitir ordenar los resultados por fecha de creación de forma ascendiente o descendiente.

El término de búsqueda, filtro u ordenación se deberán especificar como parámetros de query:

- GET /movies?name=nombre
![image](https://user-images.githubusercontent.com/51338520/204174333-af48af01-107e-49c1-8312-97d7650c68ee.png)

- GET /movies?gender=idGenero
![image](https://user-images.githubusercontent.com/51338520/204174345-77ee127d-7dd7-4e73-9ba2-c69c273ea2a7.png)

- GET /movies?order=ASC | DESC
![image](https://user-images.githubusercontent.com/51338520/204174355-84bf61cb-7907-4a65-ac93-a0a071dee12e.png)

(Desc):
![image](https://user-images.githubusercontent.com/51338520/204174374-e428a0c2-b99f-421d-b32a-bfbe239b1cfd.png)


**11. Envío de emails**

Al registrarse en el sitio, el usuario deberá recibir un email de bienvenida. Es recomendable, la utilización de algún servicio de terceros como SendGrid.

*Debo mas labs profe uu*

## Documentación

Es deseable documentar los endpoints utilizando alguna herramienta como Postman o Swagger.
Una parte de la doc, la captura no toma toda la doc.
![image](https://user-images.githubusercontent.com/51338520/204174453-280436cb-c86e-4cbd-8f8b-c11606593cee.png)

Eschemas:
![image](https://user-images.githubusercontent.com/51338520/204174506-012e3a16-0904-4905-9ac6-fb4857d657be.png)


## Tests

De forma *opcional*, se podrán agregar tests de los diferentes endpoints de la APP, verificando posibles escenarios de error:

- Campos faltantes o con un formato inválido en BODY de las peticiones
- Acceso a recursos inexistentes en endpoints de detalle

Los tests pueden realizarse utilizando Mocha + Chai.
