import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import {useUserAuth} from "../../context/UserAuthContext";
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const {logIn}=useUserAuth();
  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
      e.preventDefault();
      setError("")
      try{
          await logIn(email,password);
          navigate("/home");
      }catch(err){
          setError(err.message);
      }
  }
  return (
    <div>
      <div >
        <h1  >
          Devnation
        </h1>
      </div>
      <div>
        <h1  >
        Log in to your workspace
        </h1>
        <p>
       <Link to="/signup">Or create a new account!</Link> 
        </p>
        <form onSubmit={handleSubmit}>
        <label>Email address</label> <br />
        <input type="email" onChange={(e)=> setEmail(e.target.value)} /> <br />
        <label>Password</label> <br />
        <input type="password"   onChange={(e)=> setPassword(e.target.value)}/> <br />
        <input type="checkbox" /> <label>Remember me</label>
        <p>Forgot your password?</p>
        <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
