import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createRefreshToken } from "../utils/auth.utils.js";

export const registerController = async (req, res) => {
  const { email, name, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User already exists with this email address",
      errors: [
        {
          field: "email",
          message: "User already exists with this email address",
        },
      ],
    });
  }

  const user = await userModel.create({
    name,
    email,
    password: await bcrypt.hash(password, 12),
  });

  const accessToken = createAccessToken({
    userId: user.id,
    role: user.role,
  });

  const refreshToken = createRefreshToken({
    userId: user.id,
    role: user.role,
  });

};
