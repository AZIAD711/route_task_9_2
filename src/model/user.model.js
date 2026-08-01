import { Schema } from "mongoose";
const noData = "NO DATA FOUND !"
// USER SCHEMA 
const userSchema = new Schema({
    // NAME 
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "NAME MUST BE AT LEAST 3 CHARACTERS"],
    },
    // EMAIL 
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    // PASSWORD 
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, "PASSWORD MUST BE AT LEAST 6 CHARACTERS"],
        get() {
            return "******"
        }
    },
    // PHONE
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: [11, "PHONE MUST BE AT LEAST 11 CHARACTERS"],
        maxlength: [11, "PHONE MUST BE AT MOST 11 CHARACTERS"],
    },
    // AGE 
    age: {
        type: Number,
        max: [60, "AGE MUST BE AT MOST 60"],
        min: [18, "AGE MUST BE AT LEAST 18"],
        default: 18
    },
},
    {
        timestamps: true,
        collection: "user_data",
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
        strict: true,
        strictQuery: true,
        versionKey: "version",
    }
)
const UserModel = mongoose.model("User", userSchema)
export default UserModel