import { Button } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AppContext } from "../Context/useContext"
import Cookies from "js-cookie"


function PrivatePage({children}){
  let n =Cookies.get("token");
  const {isAuth}= useContext(AppContext)
  const navigate = useNavigate()
  
   if(!n){
    return (
    
        <Navigate to="/login"/>
        
    )
   }
  
   return children

   
}

export default PrivatePage