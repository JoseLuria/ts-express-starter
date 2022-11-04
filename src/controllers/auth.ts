import { Request, Response, NextFunction } from "express";
import { hashSync, compareSync } from "bcryptjs";
import { catchAsync, AppError, generateJWT } from "../helpers";
import { UserModel } from "../models";

export const registerUser = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { email, password } = req.body;

    const userWithEmail = await UserModel.findOne({ email });

    if (userWithEmail) {
      throw new AppError(400, "There is already a user with this email");
    }

    const newUser = new UserModel(req.body);
    newUser.password = hashSync(password);
    await newUser.save();

    const token = generateJWT(newUser._id);

    const { _id, name } = newUser;

    res.status(200).json({ user: { _id, name, email }, token });
  },
);

export const loginUser = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select("name email password");

    if (!user) {
      throw new AppError(400, "Invalid email or password");
    }

    const isValidPassword = compareSync(password, user.password!);

    if (!isValidPassword) {
      throw new AppError(400, "Invalid email or password");
    }

    const token = generateJWT(user._id);

    user.password = undefined;

    res.status(200).json({ user, token });
  },
);

export const renewToken = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.body;

    const token = generateJWT(id);

    const user = await UserModel.findById(id).select("name email");

    res.status(200).json({ user, token });
  },
);
