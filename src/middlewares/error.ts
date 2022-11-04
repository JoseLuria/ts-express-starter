import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  res.status(err.code || 500).json({
    message: err.message,
    stack: err.stack,
  });
};
