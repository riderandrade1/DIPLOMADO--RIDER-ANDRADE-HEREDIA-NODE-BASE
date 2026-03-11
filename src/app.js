import express from "express";
import usersRoutes from "./routes/users.route.js";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const app = express();

app.use(express.json());

// rutas API
app.use("/", usersRoutes);

// swagger
const swaggerDocument = YAML.load("./src/swagger.yaml");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// pagina principal
app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
  <title>Users API - Diplomado Backend</title>

  <style>
  body{
    margin:0;
    font-family:Arial;
    background:#0f172a;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
  }

  .container{
    background:#1e293b;
    padding:40px;
    border-radius:10px;
    text-align:center;
    width:420px;
  }

  h1{
    color:#22c55e;
  }

  p{
    color:#cbd5f5;
  }

  a{
    display:block;
    margin:12px;
    padding:10px;
    background:#334155;
    color:white;
    text-decoration:none;
    border-radius:6px;
  }

  a:hover{
    background:#22c55e;
  }

  </style>

  </head>

  <body>

  <div class="container">

  <h1>🚀 API Users</h1>

  <p>Diplomado Backend - Rider Andrade</p>

  <h3>Endpoints</h3>

  <a href="/api/users">Ver usuarios</a>

  <a href="/api/users/list/pagination?page=1&limit=5">
  Usuarios con paginación
  </a>

  <a href="/api-docs">
  Documentación Swagger
  </a>

  </div>

  </body>
  </html>
  `);
});

export default app;
