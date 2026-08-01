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