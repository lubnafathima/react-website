import React from "react";

const RightAside = ({ contentInput }) => {
  return (
    <div className="rightAside">
      <div className="asideBox">
        {contentInput === "" ? "Aside" : contentInput}
      </div>
    </div>
  );
};

export default RightAside;