import React from "react";
import ContactLeft from "./Contactleft/ContactLeft";
import ContactRight from "./Contactright/ContactRight";
import "./contact.css"

const Contact = () => {

    return (
  
      <>
      <div className="contactpage">
          <div className="contactleft"><ContactLeft/></div> 
          <div className="contactright"><ContactRight/></div> 
      </div>       
      </>
     
    );
  }
  
  export default Contact;