import React from "react";
import {useLocation} from 'react-router-dom';
import Header from "../component/Header";

const About = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="about_container">
        <div className="about_content">
          {location.state ? location.state : "Add Some Random Text Here"}
        </div>
      </div>
    </>
  );
};

export default About;
