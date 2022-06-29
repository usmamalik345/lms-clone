import { useEffect, useState } from "react";import "./recording.css";

const Recording = (props) => {
  const recording= props.dataRecording;
  
  return (
    <div className="recording">
      <h1 className="recording__title">Lecture Recordings</h1>
      <p className="recording__para">You will get access to the recordings after each class. All recordings will be listed here.</p>
      <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table className="table table-striped table-auto table-responsive" >
    <thead className="recording__table-light  recording_border-color">
      <tr >
        <th className="recording__headings">VIDEO TITLE</th>
        <th className="recording__headings">INSTRUCTOR NAME</th>
        <th className="recording__headings">DATE</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {recording&&recording.map((data)=>{
        return(<>
         <tr key={data.courseId} className="bg-white">
      <td className="instructor__class"><a href={data.videoUid} target="_blank" rel="noopener noreferrer" className="Instructor__ref">{data.videoTitle}</a></td>
        
        <td className="recording_td">{data.instructorName}</td>
        <td className="recording_td">{data.date}	</td>
        <td className="recording_td recording_td-right"><a className="recording_watch" href={data.videoUid} target="_blank" rel="noopener noreferrer">Watch Recording</a></td>
      </tr>
        </>)
      })}
     
     
    </tbody>
  </table>
  </div>
    </div>
  )
}

export default Recording