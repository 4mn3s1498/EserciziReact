import { useState } from "react";
export function useCustom (){
  
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

function handleChange(event){
   if(event.target.name === "username") {
     setUsername (event.target.value)
   }
 if(event.target.name === "password"){
    setPassword (event.target.value)
 }

}
return{
    username,
    password,
    handleChange
}

}