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