import { verifyAccessToken } from "../utils/auth.utils.js";

export const authMiddleware = async (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({
      message: "Access token not found",
    });
  }

  try {
    const decoded = verifyAccessToken(accessToken);

    const {userId,role} = decoded

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired access token",
    });
  }
};
