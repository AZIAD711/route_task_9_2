import { Schema ,model} from "mongoose";
import { UserRole } from "../common/enum/role.js";
import { StatusAccount } from "../common/enum/status-account.js";
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
    // ROLE 
    role : {
        type : String ,
        enum : Object.values(UserRole),
        default : UserRole.USER
    },
    // STATUS ACCOUNT 
    statusAccount : {
        type : String ,
        enum : Object.values(StatusAccount),
        default : StatusAccount.ACTIVE
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
const UserModel = model("User", userSchema)
export default UserModel