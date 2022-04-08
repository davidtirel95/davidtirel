import React from 'react';
import IntroLeft from './Introleft/IntroLeft'
import IntroRight from './Introright/IntroRight'; 
import "./intro.css";

const Intro = () => {

    return (
  
      <>
  
      <div className="intro">
          <div className="introleft"><IntroLeft/></div> 
          <div className="introright"><IntroRight/></div> 
      </div>
        
      </>
     
    );
  }
  
  export default Intro;

