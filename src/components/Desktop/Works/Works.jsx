import React from "react";
import WorksLeft from "./Worksleft/WorksLeft";
import WorksRight from "./Worksright/WorksRight";
import "./works.css";

const Works = () => {

    return (
  
      <>
      <div className="works">
          <div className="worksleft"><WorksLeft/></div> 
          <div className="worksright"><WorksRight/></div> 
      </div>       
      </>
     
    );
  }
  
  export default Works;