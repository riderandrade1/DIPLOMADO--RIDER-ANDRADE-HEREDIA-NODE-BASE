# Users API - Diplomado Backend

API desarrollada con Node.js y Express para la gestión de usuarios.
RIDER ANDRADE HEREDIA 
## Tecnologías usadas

-   Node.js
-   Express
-   Swagger
-   Pino Logger
-   Morgan


## Instalación

Clonar el repositorio:

    git clone https://github.com/usuario/proyecto.git

Entrar al proyecto:

    cd proyecto

Instalar dependencias:

    npm install


## Ejecutar el proyecto

Modo desarrollo:

    npm run start:dev

Modo normal:

    npm start

Servidor:

    http://localhost:3000

## Endpoints disponibles

### Obtener todos los usuarios

    GET /api/users

### Obtener usuario por ID

    GET /api/users/:id

### Obtener usuarios con paginación

    GET /api/users/list/pagination?page=1&limit=5

## Documentación Swagger

La documentación de la API está disponible en:

    http://localhost:3000/api-docs

Usa Swagger para probar los endpoints directamente desde el navegador.

## Ejemplo de respuesta paginada

    {
     "success": true,
     "total": 12,
     "page": 1,
     "pages": 3,
     "data": [
       {
         "id": 12,
         "username": "user12",
         "status": "inactive"
       }
     ]
    }

## Autor

Proyecto desarrollado para el Diplomado Backend.
