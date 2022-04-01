import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./contact.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Popup from 'reactjs-popup';

toast.configure()
const Intro = () => {

const notify = () => 
{
  toast.success('copied!', {
    autoClose:6000
  })
}
  return (
 
    <div className="c"> 
        <div className="c-left">
            <div className="c-left-wrapper">
                <div className="c-name">David Tirel</div>
                    <div className="c-title-item">Web Design</div>
                    <div className="c-title-item-and">and </div>
                    <div className="c-title-item-dev">Development </div>
            </div>
            <div className="c-location">Brussels, Belgium <br /> (GMT+1)</div>
            <div className="social">
                <div><a className="contact" href="https://www.linkedin.com/in/david-tirel-3807b1221/"target="_blank" rel="noreferrer">Linkedin</a></div>
                <div><a className="contact" href="https://github.com/davidtirel95"target="_blank" rel="noreferrer">Github</a></div>
            </div>
        </div> 

        <div className="c-right">
          <div className="c-right-wrapper">
            <div className="c-header">
              <div className="c-number">3</div>           
              <div className="c-contact">Contact</div>
            </div>
           
            <div className="c-interest">Drop a line, say hi !<br />Here's an 
              <p className="email">
                <Popup trigger={
                  <CopyToClipboard 
                    text='davidtirel95@gmail.com'>
                     <button data-replace="copy" onClick={notify} >
                       <span>email</span>
                    </button>
                  </CopyToClipboard>}
                   position="right center">
                   
                </Popup> 
              </p>
            </div>
          </div>
         
            
          <div className="c-end">
              Currently looking for a 2 months front-end,
              design oriented internship. To improve coding and 
              UI design skills. 
          </div>

          </div>
    </div>
    
  )
}

export default Intro;
