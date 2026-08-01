import { createNoteService, updateNoteService } from "./note.service.js"
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
// UPDATE SINGLE NOTE 
export const updateNoteController = async (request, response) => {
    try {
        const data = request.body
        const userId = request.user._id
        const note = await updateNoteService(data, request.params.id, userId)
        response.status(200).json({
            message: "✅ NOTE UPDATED SUCCESSFULLY !",
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

