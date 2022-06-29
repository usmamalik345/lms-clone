import React from 'react'
import "./assignment.css"
import {AiOutlineFolderAdd} from "react-icons/ai";
const Assignment = () => {
  return (
    <div className="container mt-4">
    <div className="assignment ">
      <h1 className='text-assi'>YOUR ASSIGNMENTS & PROJECTS</h1>

      <p className='assignment__paragraph'>These projects are designed to make you a solid developer.Make sure to complete them all on time!</p>
     
      <div className="project-box">
     <AiOutlineFolderAdd size={50}  className="assignment__icon"/>
        <p>You have no Assignments 😭</p>
      </div>
    </div>
    </div>
  )
}

export default Assignment