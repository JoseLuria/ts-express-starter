import { Router } from "express";
import { loginUser, registerUser, renewToken } from "../controllers/auth";
import { loginValidations, registerValidations } from "../validations/auth";
import { validateJWT } from "../middlewares";

const router = Router();

router.post("/register", registerValidations, registerUser);
router.post("/login", loginValidations, loginUser);
router.get("/renew", validateJWT, renewToken);

export { router };
