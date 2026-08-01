import {signupController }from "./auth.controller.js"
import express from "express"
const userRouter = express.Router()
userRouter.post("/signup", signupController)
export default userRouter