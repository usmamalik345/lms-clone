import React from "react";
import "./ProfilePage.css";
import avatar from "../../images/profile.png";
import ClassStanding from "../ClassStanding/ClassStanding";
import Chart from "../Chart/Chart";
import bulb from "../../images/bulb.png";
import { RiPencilLine } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import {IoImageSharp} from "react-icons/io5";
import {FiLink} from "react-icons/fi";

const ProfilePage = () => {
  return (
    <div className="profile-page-wrapper">
      {/* nav overlap */}
      <div className="overlap">
        <p>Your Profile</p>
      </div>

      {/* profile wrapper */}
      <div className="rectangle-474">
        <div className="profile-name-img-contact-wrapper">
          {/* left side profile info  */}
          <div className="profile-info">
            <div className="image">
              <img src={avatar} alt="" />
              <i class="fa-solid fa-pen"></i>
            </div>
            <div className="profile-intro">
              <span className="name">Tom Cook</span>
              <span className="job">.Net engineer at PFA</span>
              <span className="location">Lahore District, Punjab Pakistan</span>
              <a href="/" className="email">
                tomcook@gmail.com
              </a>
            </div>
          </div>

          {/* right side share and save buttons  */}
          <div className="buttons-wrapper">
            {/* share profile button  */}
            <div className="button">
              <i className="fa-solid fa-share"></i>
              <span>Share profile</span>
            </div>
            {/* save pdf button  */}
            <div className="button">
              <i class="fa-solid fa-download"></i>
              <span>Save as PDF</span>
            </div>
          </div>
        </div>

        {/* Attendance , interaction and assignments wrapper  */}
        <div className="stat-cards-wrapper">
          {/* Attendance card */}
          <div className="stat-card">
            <div className="left">
              <span className="stat-name">Attendance</span>
              <span className="percentage">76%</span>
            </div>
            <div className="right">
              <i className="fa-solid fa-arrow-up-long"></i>
              <span>12%</span>
            </div>
          </div>
          {/* Interaction card */}
          <div className="stat-card">
            <div className="left">
              <span className="stat-name">Interaction</span>
              <span className="percentage">89%</span>
            </div>
            <div className="right">
              <i className="fa-solid fa-arrow-up-long"></i>
              <span>12%</span>
            </div>
          </div>
          {/* Assignments submitted card */}
          <div className="stat-card">
            <div className="Assignments-div">
              <div className="stat-name">Assignments submitted</div>
              <p>
                <span>6</span> out of 2 pending
              </p>
            </div>
          </div>
        </div>
        {/* Chart , And class standing  */}
        <div className="activity-wrapper">
          chart 
          <div className="left-side">
            <div className="chart-wrapper">
              <div className="chart-heading">
                <p>
                  Activity this <span>week <i class="fa-solid fa-caret-down"></i></span>
                </p>
              </div>
              <Chart />
            </div>
            <div className="prog-stat">
              <p>You are doing good!</p><p>.</p>
              <p>
                Chances are strong for you to land a job in a company line
                Airbnb, Booking.com or Sena Tech.
              </p>
              <a href="/">
                {/* <i class="fa-brands fa-github"></i> */}
                <img src={bulb} alt="" />
                See tips for improvement
              </a>
            </div>
          </div>
          {/* Class Standing */}
          <div className="right-side">
            <ClassStanding />
          </div>
        </div>

        {/* about  */}
        <div className="about">
          <span>About</span>
          <i class="fa-solid fa-pen pencil-icon">
            {" "}
            <RiPencilLine />{" "}
          </i>
          <p className="about-Parass">
            I am a friendly aimed, hardworking professional or acts as a means
            by which to connect to or link to, another object. The first object
            in this relation is said to refer to the second object.he standard
            Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur
          </p>
        </div>

        {/* Portfolio  */}
        <div className="full-portfilio-wrapper">
          {/* <Portfolio /> */}
          <div className="portfolio">
            <span> Portfolio </span>
            <i className="add-icon">
              {" "}
              <div class="dropdown">
                 
                  <div class="dropdown">
                    <button
                      class="btn "
                      type="button"
                      id="dropdownMenu2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <GrAdd />
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li>
                        <button class="dropdown-item" type="button">
                          <div className="main_drop">
                              < IoImageSharp  className="main_drop_img"/>
                             <div className="child_drop">
                                <span> Link </span>
                                <p> Show links to content, Github etc.</p>
                               </div>     
                          </div>
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item" type="button">
                        <div className="main_drop">
                              < FiLink className="main_drop_link"/>
                             <div className="child_drop">
                                <span> Media </span>
                                <p> Upload photos, documents, and presentations</p>
                               </div>     
                          </div>
                        </button>
                      </li>
                      
                    </ul>
                  </div>
                
              </div>{" "}
            </i>

            <i>
              {" "}
              <RiPencilLine />{" "}
            </i>
          </div>

          {/* ---cards---- */}

          <div className="cards">
            <div className="nav-lab">
              <div className="cards_img">
              <img src="../images/img1.png" alt="" />
              </div>
              <div className="nvl-box">
                <span> NVlabs / instant-ngp</span>
                <p>Instant neural graphics primitives: lightning...</p>
              </div>
            </div>

            <div className="nav-lab">
            <div className="cards_img">
              <img src="../images/img2.png" alt="" />
              </div>
              <div className="nvl-box">
                <span> Nfiles-community / Files</span>
                <p>A modern file manager that pushes the...</p>
              </div>
            </div>

            <div className="nav-lab">
            <div className="cards_img">
              <img src="../images/img3.png" alt="" />
              </div>
              <div className="nvl-box">
                <span> AirAmico - Website-UI/UX Design.</span>
                <p>We designed their complete website and...</p>
              </div>
            </div>
            <div className="nav-lab">
            <div className="cards_img">
              <img src="../images/img4.png" alt="" />
              </div>
              <div className="nvl-box">
                <span> NVlabs / instant-ngp</span>
                <p>Instant neural graphics primitives: lightning...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
