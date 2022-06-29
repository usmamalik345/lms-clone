import React,{useState} from 'react'
import './Signup.css'
import {FaGoogle} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {useUserAuth} from "../../context/UserAuthContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [username,setUserName]=useState("");
  const [location,setLocation]=useState("");
  const [about,setAbout]=useState("");
  const [error,setError]=useState("");
  const {signUp}=useUserAuth();
  const navigate=useNavigate();
  const handleSubmit=async (e)=>{
      e.preventDefault();
      axios.post("http://localhost:5001/lms-clone-squad-d/us-central1/app/api/create",{
        name,
        username,
        email, 
        password, 
        location,
        about
      })
      .then((res)=>{
      e.target.reset();
      }).catch(err=>{
        console.log(err);
      })
      setError("")
      try{
          await signUp(email,password);
          navigate("/");
      }catch(err){
          setError(err.message);
      }
  }
  return (
    <div className="SignUp">
      <div>
      <h2 className='Signup__heading'>Create an Account</h2>
      <p className='Signup__des'>Hire talented people trusted and verified by our platform.</p>
      <div className="Signup__Container">
        <div className='Signup__social'>
        <p className='Signup__Text'>Sign up with</p>
        <div className="Signup__Social_Icon">
          <div className='Social-icon'>
            <FaGoogle/>
          </div>
          <div className='Social-icon'>
            <BsLinkedin/>
          </div>

        </div>
        <div>
        <span className='Signup_info'>Or use email to sign up</span>
        </div>
        <div>
          <form onSubmit={handleSubmit} id="signupForm">
          {error && `${error}`}
            <label>
              Name
            </label><br />
            <input className='Signup__input' type="text"  onChange={(e)=>{
                setName(e.target.value);
            }}/><br />
            <label>
              Username
            </label><br />
            <input className='Signup__input' type="text" onChange={(e)=>{
                setUserName(e.target.value);
            }}/><br />
            <label>
              Email Address
            </label><br />
            <input className='Signup__input' type="email"  onChange={(e)=>{
                setEmail(e.target.value);
            }} /><br />
            <label>
              Password
            </label><br />
            <input className='Signup__input' type="password"  onChange={(e)=>{
                setPassword(e.target.value);
            }}/><br />
            <label>
              Location
            </label><br />
            <input className='Signup__input' type="text" onChange={(e)=>{
                setLocation(e.target.value);
            }}/><br />
            <label>
              About yourself
            </label><br />
            <textarea onChange={(e)=>{
              setAbout(e.target.value);
            }} className='Signup__input' placeholder="Write About yourself" rows="4" cols="50" style={{resize:"none"}}></textarea>

            <button type="submit" className='Signup_submit_button' >
              <span className='Button-Text'>
              Create Account
              </span>
            </button>

          </form>
        </div>
        <p className='Down-text'>
        By signing up you agree to The DevNation’s Terms of Services
        </p>
        </div>
      </div>
      </div>
    </div>

  )
}

export default Signup