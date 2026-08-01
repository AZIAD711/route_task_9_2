import {deleteProfileController, loginController, signupController, updateProfileController }from "./auth.controller.js"
import {authencation,authorization} from "../../common/middleware/auth.middleware.js"
import express from "express"
import { UserRole } from "../../common/enum/role.js"
const userRouter = express.Router()
userRouter.post("/signup", signupController)
userRouter.post("/login", loginController)
userRouter.patch("/update", authencation(), authorization(UserRole.USER,UserRole.ADMIN), updateProfileController)
userRouter.delete("/delete", authencation(), authorization(UserRole.USER,UserRole.ADMIN), deleteProfileController)
export default userRouter