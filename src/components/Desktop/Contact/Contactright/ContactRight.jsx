import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contactright.css";

toast.configure()
const ContactRight = () => {
    const notify = () => 
{
  toast.success('copied!', {
    autoClose:6000
  })
}
    return (
        <>

<div className="c-right">
<div className="c-right-wrapper">
  <div className="c-header">
    <div className="c-number">3</div>           
    <div className="c-contact">Contact</div>
  </div>
  <div className="int">
  <div className="c-interest">Drop a line,<br /> say hi !
  Here's an <p className="email">
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
</div>
</div>
<div className="c-end">
    Currently looking for a 2 months front-end,
    design oriented internship. To improve coding and 
    UI design skills. 
    <div className="try">

    </div>
</div>
</>
)
}

export default ContactRight;