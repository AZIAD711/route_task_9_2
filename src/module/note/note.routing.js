import { aggregateNotesController, createNoteController, deleteAllNotesController, deleteNoteController, getNoteByIdController, noteWithUserController, paginateSortController, replaceNoteController, searchNoteByContentController, updateAllTitleController, updateNoteController }from "./note.controller.js"
import {authencation,authorization} from "../../common/middleware/auth.middleware.js"
import express from "express"
import { UserRole } from "../../common/enum/role.js"
const noteRouter = express.Router()
noteRouter.post("/create", authencation(), authorization(UserRole.USER,UserRole.ADMIN), createNoteController)
noteRouter.patch("/update/:id", authencation(), authorization(UserRole.USER,UserRole.ADMIN), updateNoteController)
noteRouter.put("/replace/:id", authencation(), authorization(UserRole.USER,UserRole.ADMIN), replaceNoteController)
noteRouter.put("/all", authencation(), authorization(UserRole.USER,UserRole.ADMIN), updateAllTitleController)
noteRouter.delete("/delete/:id", authencation(), authorization(UserRole.USER,UserRole.ADMIN), deleteNoteController)
noteRouter.get("/paginate-sort", authencation(), authorization(UserRole.USER,UserRole.ADMIN), paginateSortController)
noteRouter.get("/content", authencation(), authorization(UserRole.USER,UserRole.ADMIN), searchNoteByContentController)
noteRouter.get("/note-with-user", authencation(), authorization(UserRole.USER,UserRole.ADMIN), noteWithUserController)
noteRouter.get("/aggregate", authencation(), authorization(UserRole.USER,UserRole.ADMIN), aggregateNotesController)
noteRouter.delete("/all", authencation(), authorization(UserRole.USER,UserRole.ADMIN), deleteAllNotesController)
export default noteRouter