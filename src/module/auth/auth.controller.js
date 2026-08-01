import {deleteProfileService, getProfileService, loginService, signupService, updateProfileService} from "./auth.service.js"
// SIGN UP
export const signupController = async(request,response)=>{
    try{
        const user = request.body
        const result = await signupService(user)
        response.status(201).json({
            message:"✅ SIGN UP SUCCESSFULLY !",
            result:result
        })
    }
    catch(error){
        response.status(500).json({
            message:"Internal Server Error !",
            error:error.message
        })
    }
}
// LOGIN
export const loginController = async(request,response)=>{
    try{
        const user = request.body
        const result = await loginService(user)
        response.status(200).json({
            message:"✅ LOGIN SUCCESSFULLY !",
            result:result
        })
    }
    catch(error){
        response.status(500).json({
            message:"Internal Server Error !",
            error:error.message
        })
    }
}
// UPDATE PROFILE
export const updateProfileController = async(request,response)=>{
    try{
        const userId = request.user._id
        const data = request.body
        const result = await updateProfileService(data, userId)
        response.status(200).json({
            message:"✅ PROFILE UPDATED SUCCESSFULLY !",
            result:result
        })
    }
    catch(error){
        response.status(500).json({
            message:"Internal Server Error !",
            error:error.message
        })
    }
}
// DELETE PROFILE
export const deleteProfileController = async(request,response)=>{
    try{
        const userId = request.user._id
        const data = request.body
        const result = await deleteProfileService(userId)
        response.status(200).json({
            message:"✅ PROFILE DELETED SUCCESSFULLY !",
            result:result
        })
    }
    catch(error){
        response.status(500).json({
            message:"Internal Server Error !",
            error:error.message
        })
    }
}
// GET PROFILE
export const getProfileController = async(request,response)=>{
    try{
        const userId = request.user._id
        const result = await getProfileService(userId)
        response.status(200).json({
            message:"✅ PROFILE RETRIEVED SUCCESSFULLY !",
            result:result
        })
    }
    catch(error){
        response.status(500).json({
            message:"Internal Server Error !",
            error:error.message
        })
    }
}