import React, { useState } from "react";
import Header from "../component/Header";
import Main from "../component/Main";
import Header from "../component/Header";
import Main from "../component/Main";

const Home = () => {
  const [headerInput, setHeaderInput] = useState("");

  return (
    <div className="home">
      <Header headerInput={headerInput} setHeaderInput={setHeaderInput} />
      <Main headerInput={headerInput} />
    </div>
  );
};

export default Home;