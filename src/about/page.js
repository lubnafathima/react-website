import React from "react";
import {useLocation} from 'react-router-dom';
import Header from "../component/Header";

const About = () => {
  const {state} = useLocation();

  return (
    <>
      <Header />
      <div className="about_container">
        <div className="about_content">
          {state ? state : "Add Some Random Text Here"}
        </div>
      </div>
    </>
  );
};

export default About;
