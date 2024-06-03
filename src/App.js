import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Main from "./component/Main";

const App = () => {
    const [ headerInput, setHeaderInput ] = useState("");
    
    return (
        <div className="app">
            <Header headerInput={headerInput} setHeaderInput={setHeaderInput} />
            <Main headerInput={headerInput} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);