import express from "express";
import cors from "cors";
import { routes } from "./router";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./doc/swagger";

export const app = express();
dotenv.config();

app.use("/docmasna", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);
