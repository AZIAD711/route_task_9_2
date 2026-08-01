import NoteModel from "../../model/note.model.js"
// CREATE NOTE 
export const createNoteService = async (data, userId) => {
    const note = await NoteModel.create({
        title: data.title,
        content: data.content,
        userId: userId
    })
    return note
}
// UPDATE SINGLE NOTE
export const updateNoteService = async (data, noteId, userId) => {
    const note = await NoteModel.findOneAndUpdate(
        { _id: noteId, userId: userId },
        { $set: data },
        { new: true }
    )
    return note
}
// REPLACE SINGLE NOTE
export const replaceNoteService = async (data, noteId, userId) => {
    const note = await NoteModel.findOneAndReplace(
        { _id: noteId, userId: userId },
        { $set: data },
        { new: true }
    )
    return note
}
// UPDATE ALL TITLE OF NOTES
export const updateAllTitleService = async (data, userId) => {
    const note = await NoteModel.updateMany({
        userId: userId
    }, {
        $set: data
    },
        {
            new: true
        }

    )
    return note
}
