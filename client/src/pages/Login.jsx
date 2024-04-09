import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
const login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigateTo = useNavigate();
  const login = ()=>{
    const data = {username:username, password : password}
    console.log(data);
    axios.post("http://localhost:3001/auth/login",data).then((response)=>{
      if(!response.data){
        alert(response.data.error)
      }else{
        sessionStorage.setItem("accessToken",response.data)
        navigateTo("../admin")
      }
    })
  }
  return (
    <>
      <div className="flex bg-primary items-center justify-center h-screen">
        <div
          id="login-box"
          className="flex flex-col md:w-[300px] gap-5 bg-white rounded-xl px-7 py-5"
        >
          <h1 className="text-center text-2xl">LOGIN</h1>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              className="border-b-2 px-2 py-1  focus:rounded-md outline-primary"
              placeholder="Identifiant"
              type="text"
              name="Username"
              onChange={(event)=>{
                setUsername(event.target.value)
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="border-b-2 px-2 py-1 focus:rounded-md outline-primary"
              placeholder="Mot de passe"
              type="password"
              name="password"
              onChange={(event)=>{
                setPassword(event.target.value)
              }}
            />
          </div>
          <div className="flex justify-center">
            <button className="blue-btn" onClick={login}>Se connecter</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
