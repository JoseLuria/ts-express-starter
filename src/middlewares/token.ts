import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../helpers";

const JWT_SECRET = process.env.JWT_SECRET as any;

export const validateJWT = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.header("x-token");

  if (!token) {
    throw new AppError(401, "Invalid Token");
  }

  const { id } = verify(token, JWT_SECRET) as any;

  req.body.id = id;

  next();
};
