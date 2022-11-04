import { readdirSync } from "fs";
import { Router } from "express";

const router = Router();

readdirSync(__dirname).filter((fileName) => {
  const cleanName = fileName.split(".").shift();

  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
