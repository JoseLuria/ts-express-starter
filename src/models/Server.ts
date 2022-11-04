import express, { Application } from "express";
import cors from "cors";
import { dbConnect } from "../helpers";
import { router } from "../router";
import { errorMiddleware } from "../middlewares";

export class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "4000";

    this.middlewares();
    this.database();
    this.app.use(errorMiddleware);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use("/api", router);
  }

  async database() {
    await dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on PORT: ${this.port}`);
    });
  }
}
