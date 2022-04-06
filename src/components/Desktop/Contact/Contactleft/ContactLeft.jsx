import React from 'react';
import "./contactleft.css";


const ContactLeft = () => {

  return (
    <>
    <div className="c"> 
        <div className="c-left">
            <div className="c-left-wrapper">
                <div className="c-name">David Tirel</div>
                    <div className="c-title-item">Web Design</div>
                    <div className="c-title-item-and">and </div>
                    <div className="c-title-item-dev">Development</div>
            </div> </div> 
            <div className="c-location">Brussels, Belgium <br /> (GMT+1)</div></div>
            <div className="social">
                <div><a className="links" href="https://www.linkedin.com/in/david-tirel-3807b1221/"target="_blank" rel="noreferrer">Linkedin</a></div>
                <div><a className="links" href="https://github.com/davidtirel95"target="_blank" rel="noreferrer">Github</a></div>
            </div>
       
   
    </>    
  )
}

export default ContactLeft;
