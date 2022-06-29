import React from 'react'
import Header from "./header/header";
import Footer from "./footer/footer";
import HomeMain from "./homeMain/HomeMain";
// import Profile from "./profile/Profile";

const Home = () => {
  return (
    <div>
    <Header/>
    <HomeMain/>
    {/* <Profile/> */}
    <Footer/></div>
  )
}

export default Home