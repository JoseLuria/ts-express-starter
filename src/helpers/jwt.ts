import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as any;

export const generateJWT = (id: any) => {
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "24h" });
  return token;
};

export const checkJWT = (token: string) => {
  try {
    const { id } = jwt.verify(token, JWT_SECRET) as any;
    return [true, id];
  } catch (error) {
    return [false, null];
  }
};
