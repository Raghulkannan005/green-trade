import express from "express"
const router = express.Router()

import { loginHandler, registerHandler } from "../controllers/auth.controller.js"

router.post("/login", loginHandler)
router.post("/register", registerHandler)

export default router