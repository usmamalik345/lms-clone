import React from  'react';
import { useState,useEffect } from 'react';
import {Routes,Route,Link,Outlet} from "react-router-dom"; 


import "./homemain.css";
const Home = () => {
  const [activeNav,setActiveNav]=useState('/');
  // const [dashboard, DashboardData] = useState(null);
  // const [recording, RecordingData] = useState(null);
  // const [syllabus, syllabusData] = useState(null);
  
  // // Dashboard API section
  // useEffect(()=> {
  //   fetch("http://localhost:5001/ahad/asia-southeast1/user/liveSessions/getAll/4apSW5zxhQIUoAZqmMdi")
  //   .then((resp)=>{
  //     return resp.json();
      

  //   }).then((data)=>{
  //         console.log("Dashboard API called!");
  //         DashboardData(data)
  //   }).catch((err)=>{
  //       console.log(err);
  //   }) 

  // },[])
  // // Recording API section
  // useEffect(() => {
  //   fetch(
  //     "http://localhost:5001/ahad/asia-southeast1/user/recordings/getAll/Np92AJy9c53bMjcrUMmm"
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("Recording API called!");
  //       RecordingData(data);
  //     }).catch((err) => {console.log(err);});
  // }, []);
  // // Syllabus API section
  // const callSyllabusAPI=()=>{
  //   fetch(
  //     "http://localhost:5001/ahad/asia-southeast1/user/syllabus/getAll/3"
  //   )
  //     .then((e) => {
  //       // console.log("API Response ",e);
  //       return e.json();
  //     })
  //     .then((data) => {
  //       console.log("Syllabus API called!",data);
  //       {Array.isArray(data)?syllabusData(data):callSyllabusAPI();} //Keep calling Syllabus API until gets data other than '3'
  //       ;
  //     });
  // }
  // useEffect(() => {
  //   callSyllabusAPI();
  // },[]);


  // if (dashboard === null) return null
  // if (recording === null) return null
  // if (syllabus === null) return null
  
  return (
    <div  className="container-fluid home">
    <div className="container background">
    <div className="dash__nav">
    <div className="navbar__container pt-3">
          <Link to="/home"  onClick={(()=>{setActiveNav('/home')})} ><button  className={activeNav=== '/home'?'active py-3 px-1':'py-3 px-1'}>Dashboard </button></Link>
          <Link to="recording" onClick={(()=>{setActiveNav('recording')})} ><button  className={activeNav=== 'recording'?'active py-3 px-1':'py-3 px-1'}>Recordings </button></Link>
          <Link to="assignment" onClick={(()=>{setActiveNav('assignment')})}><button className={activeNav=== 'assignment'?'active py-3 px-1':'py-3 px-1'}>Assignments </button></Link>
          <Link to="syllabus" onClick={(()=>{setActiveNav('syllabus')})}><button className={activeNav=== 'syllabus'?'active py-3 px-1':'py-3 px-1'}>Course Syllabus </button></Link>
        </div>
        </div>
        <div className="m-3">
      <Outlet/>
          </div>
         
    </div>
    </div>
  )
}

export default Home