import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { getProducts } from "../controllers/producto.controller.js";
import verifyToken from "../middlewares/auth.middleware.js";

const router = Router();

// Aplica el middleware de autenticación a todas las rutas
router.use(verifyToken);

// Ruta de registro
router.post("/register", register);

// Ruta de login
router.post("/login", login);

// Ruta de get de productos
router.get("/productos", getProducts);

export default router;
