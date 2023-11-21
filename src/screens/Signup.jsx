import {  Button, CircularProgress, Stack, TextField , Grid, Box} from "@mui/material"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/FirebaseConfig"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const [authData,setAuthData]= useState({})
    const [isloading,setIsLoading] = useState(false)
    
    const navigate  = useNavigate()

    const setInputHandler = (e) =>{
        setAuthData(prev => ({
            ...prev,
            [e.target.id] : e.target.value
        }))

    }
    const submitHandler = async () =>{
        setIsLoading(true)
           try{
            const response = await createUserWithEmailAndPassword(auth,authData.email,authData.password)
            console.log(response.user)
            setIsLoading(false)
            navigate("/product")
        } catch(error) {
                setIsLoading(false)
                console.log(error)
            }
      
    }

  return (
    <Stack justifyContent={'center'} alignItems={"center"} height={"100vh"} 
    sx={{
        width :"300",
        boxShadow:'0 0 15px gray ',
            border:"2",
            p:'3'
    }}
    >
        <Stack maxWidth={550} sx={{
            boxShadow:'0 0 15px gray ',
            border:"10",
            p:'3'
        }}
        gap={"2"}> 
            <Stack
            sx = {{
                p :"5"
            }}
            >
                <TextField id="email" onChange={setInputHandler} label ={"Email"} placeholder="Email" />        
            </Stack>
            <Stack>
                <TextField id="password" onChange={setInputHandler} label={"password"} placeholder="password" />              
            </Stack>
            <Stack>
                {
                    isloading ? <CircularProgress/> : <Button  onClick={submitHandler}>Submit</Button>
                }
            </Stack>
        </Stack>
    </Stack>
  )
}
   


export default Signup