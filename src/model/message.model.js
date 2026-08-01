import { Schema ,model} from "mongoose";
const noData = "NO DATA FOUND !"
// NOTE SCHEMA 
const noteSchema = new Schema({
    // TITLE 
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "TITLE MUST BE AT LEAST 3 CHARACTERS"],
        validate: {
            validator: function (value) {
                return value.toLowerCase();
            },
            message: "TITLE CANNOT BE UPPER CASE !"
        }
    },
    // CONTENT 
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, "CONTENT MUST BE AT LEAST 10 CHARACTERS"],
    },
    // USER ID
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

},
    {
        timestamps: true,
        collection: "note_data",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
        strict: true,
        strictQuery: true,
        versionKey: "version",
    }
)
const NoteModel = model("Note", noteSchema)
export default NoteModel