const API_URL= import.meta.env.VITE_API_URL

export type SignupRequest = {
full_name:string
contact_number?:string
email: string
password:string
}

export type SigninRequest = {
email:string
password:string
}

export type SignupResponse = {
message: string
}

export type SigninResponse = {
message:string
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
        const error = await response.json()
        console.log("response: ",error.detail[0].msg)
        throw new Error(error.detail || "Signup Failed! Try again later.")
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