import express, { Express, Request, Response } from "express";

import cors from "cors";
import { TaskApi } from "./api/api";
import { AppDataSource } from "./config/db";

class App {
  public app: Express;
  private readonly port: number;
  private api: TaskApi;

  constructor(
    port: number = process.env.PORT ? parseInt(process.env.PORT) : 5000
  ) {
    this.app = express();
    this.port = port;
    this.api = new TaskApi();
    this.initializeMiddlewares();
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(this.api.router);
    // Add other global middlewares here
  }

  private async initializeDatabase(): Promise<void> {
    AppDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  }

  public async start(): Promise<void> {
    try {
      await this.initializeDatabase();
      this.app.listen(this.port, () => {
        console.log(`Server running on port ${this.port}`);
      });
    } catch (error) {
      console.error("Failed to start the server:", error);
      process.exit(1);
    }
  }
}

const app = new App();
app.start();

export default App;