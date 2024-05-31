import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Main from "./component/Main";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);