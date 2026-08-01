import {loginController, signupController }from "./auth.controller.js"
import {authencation,authorization} from "../../common/middleware/auth.middleware.js"
import express from "express"
const userRouter = express.Router()
userRouter.post("/signup", signupController)
userRouter.post("/login", loginController)
export default userRouter