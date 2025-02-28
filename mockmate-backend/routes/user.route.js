import express from "express"
import {login, logout, signup} from "../controllers/user.controller.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()



router.post("/signup", signup)
router.post("/login", login)
router.get("/logout", isAuthenticated, logout);


export default router;
