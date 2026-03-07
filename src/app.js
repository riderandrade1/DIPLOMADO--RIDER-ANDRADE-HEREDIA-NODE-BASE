import express from "express";
import usersRoutes from "./routes/users.route.js";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const app = express();

app.use(express.json());

app.use("/", usersRoutes);

const swaggerDocument = YAML.load("./src/swagger.yaml");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export default app;