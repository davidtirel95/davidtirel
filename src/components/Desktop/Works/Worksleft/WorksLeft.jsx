import React from 'react';
import "./worksleft.css";

const WorksLeft = () => {
  return (
     <>    
     <div className="w-l"> 
        <div className="w-left">
            <div className="w-left-wrapper">
                <div className="w-name">David Tirel</div>
                    <div className="w-title-item">Web Design</div>
                    <div className="w-title-item-and">and </div>
                    <div className="w-title-item-dev">Development </div>
            </div>
            <div className="w-title">2021-2022 <br /> Selected Works</div>
            <div className="w-desc">Projects created while being a student at BeCode <br />
            from September 2021 to March 2022.</div>
        </div>          
    </div>
    </>

  )
}

export default WorksLeft;