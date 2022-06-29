import React from 'react';
import Home from "./component/Home";
import {Routes,Route} from "react-router-dom";
import Signup from "./component/signup/Signup";
import Login from "./component/Login/Login";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import Assignments from "./component/main_component/assignments/assignment";
import Recording from "./component/main_component/recording/recording";
import Dashboard from "./component/main_component/dashboard/dashboard";
import Syllabus from "./component/main_component/syllabus/syllabus";
import Profile from "./component/profile/Profile";
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
       <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}>
       <Route path="" element={<Dashboard/>}  />
         <Route path="recording" element={<Recording />} />
         <Route path="assignment" element={<Assignments/>}/>
         <Route path="syllabus" element={<Syllabus />}/>
        </Route> 
       <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    
      </Routes>      
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
