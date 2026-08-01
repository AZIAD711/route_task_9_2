import NoteModel from "../../model/note.model.js"
// CREATE NOTE 
export const createNoteService = async (data,userId) => {
    const note = await NoteModel.create({
        title: data.title,
        content: data.content,
        userId: userId
    })
    return note
}