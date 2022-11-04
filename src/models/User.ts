import mongoose, { Schema, model, Model } from "mongoose";
import { UserInterface } from "../interfaces";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const UserModel: Model<UserInterface> =
  mongoose.models?.User || model("User", userSchema);
