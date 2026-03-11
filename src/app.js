import express from "express";
import usersRoutes from "./routes/users.route.js";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const app = express();

app.use(express.json());

// Rutas de usuarios
app.use("/api/users", usersRoutes);

// Swagger
const swaggerDocument = YAML.load("./src/swagger.yaml");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Ruta principal (para que no salga solo loading)
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Users API - Diplomado Backend</h1>
    <p>Bienvenido a la API de usuarios</p>

    <h3>Endpoints disponibles:</h3>
    <ul>
      <li><a href="/api/users">GET /api/users</a></li>
      <li><a href="/api/users/list/pagination?page=1&limit=5">GET /api/users/list/pagination</a></li>
      <li><a href="/api-docs">📚 Documentación Swagger</a></li>
    </ul>
  `);
});

export default app;
