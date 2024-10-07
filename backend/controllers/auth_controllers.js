import User from "../models/user_models.js";
import bcrypt from "bcrypt";
import generateTokens from "../utils/generateTokens.js";

export const signup = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ Error: "Contraseñas no coinciden" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ Error: "El usuario ya existe o no puede ser creado" });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokens(newUser._id, res)

      await newUser.save();
      res.status(200).json({
        _id: newUser._id,
        username: newUser.username,
        password: newUser.password,
      });
    } else {
      res.status(400).json({ Error: "Informacion de usuario invalida" });
    }
  } catch (Error) {
    console.log("Error en componente signup", Error.message);

    res.status(500).json({ Error: "Error interno de servidor" });
  }
};
