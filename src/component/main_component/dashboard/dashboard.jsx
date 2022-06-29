import React from "react";
import "./dashboard.css";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"; 


const Dashboard = (props) => {
const dashboard=props.dataDashboard;
  return (
    <div className="lms-dashboard ">
      <div className="lms-dashboard-main">
        <h3 className="text-live">Your Live Lectures </h3>
        {/* This section is for live lecture */}
        <div className=" justify-content-center">
          <div className="container-fluid py-2  Live_Recordings">
            <div className=" d-flex flex-row scrolling-wrapper-flexbox">
              {/* Live lecture cards */}
              {dashboard && dashboard.map((item)=>{
            return(
              <>
              <div className="card border-3 m-1" style={{ width: "18rem" }}>
            <div className="card-body card-size">
              
               <span className=' text-date text-block '> <BsFillCalendarCheckFill className='card-icon'/> {item.startDate} @ {item.startTime}  {item.timezone} </span>
              
              
              <span className="card-title text-block">
              {item.meetingLabel}
              </span>
             
              <span className=" text-block inst-height pb-2">Instructor: </span>
              <span className=" text-block inst-name  inst-color">{item.instructorName}</span>
              <span className=" text-block inst-color font-wg"> 
              {item.instructorRole} 
              </span>
              <div className="card-text text-block "><a href="https://www.google.com" alt="liveLecture " className='text_upcoming'> Upcoming </a></div>
            </div>
          </div>
              </>
            )
          })}
               
            </div>
          </div>
        </div>

        {/* Progress Bar Stats */}

        <div className="Lms-dashboard-progress">
          <h2 className="text-live">Your Progress</h2>
          <div className="progress m-3 myprogress">
            <div 
              className="progress-bar bar-color"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "70%" }}
            ></div>
            <div className="myPercentage">70%</div>
          </div>
        </div>
        {/* Our LMS stats */}
        <div className="m-2 ">
          <h3 className="text-stats text-live p-1 ">Your Stats</h3>
          <div className="Lms-dashboard-stats my-4">
            <div className="container d-flex lms-stats ">
              <div className="stats_logo p-1 pb-2  ">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  size="2x"
                  className="icon-color"
                ></FontAwesomeIcon>
              </div>
              <div className="mx-3 text-att">
                {" "}
                Your Attendence
                <span className="text-out  pb-4">
                  {" "}
                  <span className="text-o"> 0 </span> out of 16{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
