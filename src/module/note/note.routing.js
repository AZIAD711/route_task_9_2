import { createNoteController, deleteNoteController, replaceNoteController, updateAllTitleController, updateNoteController }from "./note.controller.js"
import {authencation,authorization} from "../../common/middleware/auth.middleware.js"
import express from "express"
import { UserRole } from "../../common/enum/role.js"
const noteRouter = express.Router()
noteRouter.post("/create", authencation(), authorization(UserRole.USER,UserRole.ADMIN), createNoteController)
noteRouter.patch("/update/:id", authencation(), authorization(UserRole.USER,UserRole.ADMIN), updateNoteController)
noteRouter.put("/replace/:id", authencation(), authorization(UserRole.USER,UserRole.ADMIN), replaceNoteController)
noteRouter.put("/all", authencation(), authorization(UserRole.USER,UserRole.ADMIN), updateAllTitleController)
noteRouter.delete("/delete/:id", authencation(), authorization(UserRole.USER,UserRole.ADMIN), deleteNoteController)
export default noteRouter