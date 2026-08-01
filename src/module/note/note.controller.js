import { createNoteService } from "./note.service.js"
// CREATE NOTE 
export const createNoteController = async (request, response) => {
    try {
        const data = request.body
        const userId = request.user._id
        const note = await createNoteService(data, userId)
        response.status(201).json({
            message: "✅ NOTE CREATED SUCCESSFULLY !",
            result: note
        })
    }
    catch (error) {
        response.status(500).json({
            message: "Internal Server Error !",
            error: error.message
        })
    }
}
