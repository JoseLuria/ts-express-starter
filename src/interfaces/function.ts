import { Request, Response, NextFunction } from "express";

export type asyncFunctionType = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;
