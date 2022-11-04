import { Request, Response, NextFunction } from "express";
import { asyncFunctionType } from "../interfaces";

export class AppError extends Error {
  public code: number;
  public message: string;

  constructor(code: number, message: string) {
    super();
    this.code = code;
    this.message = message;
  }
}

export const catchAsync = (fn: asyncFunctionType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
