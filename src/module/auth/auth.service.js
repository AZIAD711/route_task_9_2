import { StatusAccount } from "../../common/enum/status-account.js"
import { generateToken } from "../../common/token/token.js"
import UserModel from "../../model/user.model.js"
// SIGN UP 
export const signupService = async (data) => {
    const emailExist = await UserModel.findOne({ email: data.email })
    if (emailExist) {
        throw new Error("EMAIL ALREADY EXISTS !")
    }
    const user = await UserModel.create(data)
    return user
}
// LOGIN
export const loginService = async (data)=>{
const emailExist = await UserModel.findOne({ email: data.email })
    if (!emailExist) {
        throw new Error("EMAIL NOT FOUND !")
    }
    if(emailExist.statusAccount===StatusAccount.PENDING){
        throw new Error("YOUR ACCOUNT IS PENDING !")
    }
    const accessToken = generateToken({
        payload: {
            _id: emailExist._id,
            role: emailExist.role
        },
        secretKey: process.env.ACCESS_TOKEN,
        expiresIn: "1h"
    })
    const refreshToken = generateToken({
        payload: {
            _id: emailExist._id,
            role: emailExist.role
        },
        secretKey: process.env.REFRESH_TOKEN,
        expiresIn: "7d"
    })
    return { accessToken, refreshToken }
}
// UPDATE PROFILE 
export const updateProfileService = async (data, userId) => {
    const user = await UserModel.findByIdAndUpdate(userId, { ...data, password: undefined }, { new: true })
    if (!user) {
        throw new Error("USER NOT FOUND !")
    }
    if(data.password){
        throw new Error("PASSWORD CANNOT BE UPDATED !")
    }
    if(data.statusAccount){
        throw new Error("STATUS ACCOUNT CANNOT BE UPDATED !")
    }
    return user
}
// DELETE PROFILE
export const deleteProfileService = async (userId) => {
    const user = await UserModel.findByIdAndDelete(userId)
    if (!user) {
        throw new Error("USER NOT FOUND !")
    }
    return user
}