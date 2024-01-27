import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Project } from "../models/tasks/Project";
import { Task } from "../models/tasks/Task";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT
    ? parseInt(process.env.DATABASE_PORT)
    : undefined,
  username: process.env.DATABASE_USER,
  database: process.env.DATABASE,
  entities: [Project, Task],
});
