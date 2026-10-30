const API_URL= import.meta.env.VITE_API_URL

type SignupRequest = {
full_name:string
contact_number?:string
email: string
password:string
}

type SigninRequest = {
email:string
password:string
}

type SignupResponse = {
message: string
}

type SigninResponse = {
message:string
}

type ValidationErrorItem = {

    type: string
    loc: string[]
    msg: string
    input?: Record<string,unknown>
    ctx?: object

}

type ErrorResponse = {
    detail: string | ValidationErrorItem[]
}

export async function signup(data: SignupRequest):Promise<SignupResponse>{
    const response = await fetch(`${API_URL}/auth/signup`,
        {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data),
        }
    )
    if (!response.ok){
        const error: ErrorResponse = await response.json()
        // console.log("response: ",error)
        if(typeof error.detail === 'string'){
            throw new Error(error.detail || "Signup Failed! Try again later.")
        }else{
            throw new Error(error.detail.map((e)=>e.msg).join("\n"))
        }
    }
    
    return response.json()
}

export async function signin(data: SigninRequest):Promise<SigninResponse>{
     const response = await fetch(`${API_URL}/auth/signin`,
        {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data),
        }
    )
    if (!response.ok){
        const error = await response.json()
        throw new Error(error.detail || "Signin Failed! Try again later.")
    }
    
    return response.json()
}