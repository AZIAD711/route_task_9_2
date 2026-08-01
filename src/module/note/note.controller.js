import { createNoteService, deleteNoteService, getNoteByIdService, paginateSortService, replaceNoteService, searchNoteByContentService, updateAllTitleService, updateNoteService } from "./note.service.js"
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
// REPLACE SINGLE NOTE
export const replaceNoteController = async (request, response) => {
    try {
        const data = request.body
        const userId = request.user._id
        const note = await replaceNoteService(data, request.params.id, userId)
        response.status(200).json({
            message: "✅ NOTE REPLACED SUCCESSFULLY !",
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
// UPDATE ALL TITLE OF NOTES
export const updateAllTitleController = async (request, response) => {
    try {
        const data = request.body
        const userId = request.user._id
        const note = await updateAllTitleService(data, userId)
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
// DELETE OF NOTES
export const deleteNoteController = async (request, response) => {
    try {
        const userId = request.user._id
        const note = await deleteNoteService(request.params.id, userId)
        response.status(200).json({
            message: "✅ NOTE DELETED SUCCESSFULLY !",
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
// DELETE OF NOTES
export const paginateSortController = async (request, response, next) => {

    try {
        const { page = 1, limit = 10 } = request.query;

        const notes = await paginateSortService(
            request.user._id,
            Number(page),
            Number(limit)
        );

        response.status(200).json({
            message: "✅  NOTE PAGINATED AND SORTED SUCCESSFULLY !",
            data: notes
        });
    }
    catch (error) {
        response.status(500).json({
            message: "Internal Server Error !",
            error: error.message
        })
    };
}
// GET NOTE BY ID
export const getNoteByIdController = async (request, response) => {
    try {
        const userId = request.user._id
        const note = await getNoteByIdService(request.params.id, userId)
        response.status(200).json({
            message: "✅ NOTE RETRIEVED SUCCESSFULLY !",
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
// SEARCH NOTE BY CONTENT 
export const searchNoteByContentController = async (request, response) => {
    try {
        const userId = request.user._id
        const note = await searchNoteByContentService(request.query.content, userId)
        response.status(200).json({
            message: "✅ NOTE SEARCHED SUCCESSFULLY !",
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
