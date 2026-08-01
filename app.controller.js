import userRouting from "./src/module/auth/auth.routing.js"
// import noteRouting from "./src/module/note/message.routing.js"
import express from "express"
import dotenv, { config } from "dotenv"
import {databaseConnection} from "./src/database/database-connection.js"
export const app =()=>{
    dotenv.config()
    databaseConnection()
    const router = express()
    router.use(express.json())
    // USER ROUTING 
    router.use("/auth", userRouting)
    // NOTE ROUTING
    // router.use("/note", noteRouting)
    return router
}
export default app