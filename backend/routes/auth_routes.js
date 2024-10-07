import express from "express";
import { signup } from "../controllers/auth_controllers.js";

const Router = express.Router()


Router.post('/signup', signup)

export default Router