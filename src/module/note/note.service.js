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
// DELETE NOTE 
export const deleteNoteService = async (noteId, userId) => {
    const note = await NoteModel.findOneAndDelete({
        _id: noteId,
        userId: userId
    })
    return note
}
// PAGINATE AND SORT NOTES
export const paginateSortService = async (userId, page, limit) => {
    const skip = (page - 1) * limit;

    const notes = await NoteModel.find({ userId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

    return notes;
};
// GET NOTE BY ID 
export const getNoteByIdService = async (noteId , userId)=>{
    const note = await NoteModel.findOne ({
        _id : noteId,
        userId : userId
    })
    return note
}
// SEARCH NOTE BY CONTENT
export const searchNoteByContentService = async (content , userId)=>{
    const note = await NoteModel.find({
        content : { $regex: content, $options: "i" },
        userId : userId
    })
    return note
} 
// GET NOTE WITH USER DATA 
export const noteWithUserService = async (userId) => {
    const notes = await NoteModel.find({ userId })
        .select("title userId createdAt")
        .populate({
            path: "userId",
            select: "email"
        });

    return notes;
};

