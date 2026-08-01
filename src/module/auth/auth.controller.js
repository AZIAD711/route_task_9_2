import {loginService, signupService} from "./auth.service.js"
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