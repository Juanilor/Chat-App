import jwt from "jsonwebtoken";
import User from "../models/user_models.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ Error: "Error de autorizacion - Token invalido" });
    }

    const decoded = jwt.verify(token, process.env.JWT_RAND);

    if (!decoded) {
      return res
        .status(401)
        .json({ Error: "Error de autorizacion - Token invalido" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ Error: "Usuario no encontrado" });
    }

    req.user = user;

    next();
  } catch (Error) {
    console.log("Error en componente protectRoute", Error.message);

    res.status(500).json({ Error: "Error interno en componente protectRoute" });
  }
};


export default protectRoute