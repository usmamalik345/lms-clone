import {useState,useEffect} from 'react';
import {BsPatchCheck} from 'react-icons/bs';
import "./syllabus.css";
const Syllabus = (props) => {
  const syllabusArr = props.dataSyllabus;
  return (
    <div>
         <div className="container p-2">
        <div className="accordian__container">
        <div className="accordion" id="accordionExample">

        {syllabusArr&&syllabusArr.map((data)=>{
        return(<>
        <div className="accordion-item my-2">
    <h2 className="accordion-header" id={data.id}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#test" + data.id} aria-expanded="false" aria-controls={"test" + data.id}>
      SEASON {data.id} | {data.moduleTitle}
      </button>
    </h2>
    <div id={"test" + data.id} className="accordion-collapse collapse" aria-labelledby={"test" + data.id} data-bs-parent="#accordionExample">
    <div className="accordion-body"><h1 className="accordian_heading-title">Duration: {data.duration}</h1>
        <ul className="mt-4 p-0">
        {data.moduleDetails.map((details) =>{
          return(<>
        <li><div className="syllabus__flex"><BsPatchCheck className="accordian__syllabus-icon"/><p className="according__list_p">{details}</p></div></li>
        </>)
          })}
        </ul></div>
    </div>
  </div>
        </>)
      })}

</div>
</div>
        </div> 

    </div>
  )
}

export default Syllabus