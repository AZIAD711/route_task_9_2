import { createNoteController, updateNoteController }from "./note.controller.js"
import {authencation,authorization} from "../../common/middleware/auth.middleware.js"
import express from "express"
import { UserRole } from "../../common/enum/role.js"
const noteRouter = express.Router()
noteRouter.post("/create", authencation(), authorization(UserRole.USER,UserRole.ADMIN), createNoteController)
noteRouter.patch("/update/:id", authencation(), authorization(UserRole.USER,UserRole.ADMIN), updateNoteController)
export default noteRouter