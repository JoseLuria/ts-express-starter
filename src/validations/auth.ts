import { check } from "express-validator";
import { errorsMsg } from "./errors";
import { validateMiddleware } from "../middlewares";

export const loginValidations = [
  check("email", errorsMsg.email).isEmail(),
  check("password", errorsMsg.password).notEmpty().isLength({ min: 6 }),
  validateMiddleware,
];

export const registerValidations = [
  check("name", errorsMsg.name).isLength({ min: 2 }),
  check("email", errorsMsg.email).isEmail(),
  check("password", errorsMsg.password).notEmpty().isLength({ min: 6 }),
  validateMiddleware,
];
