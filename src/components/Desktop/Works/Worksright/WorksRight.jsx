import React from "react";
import Card from "../../Card/Card";
import img1 from "../../../../assets/b.png";
import img2 from "../../../../assets/realtor.png";
import "./worksright.css";

const WorksRight = () =>  {
    return ( 
<>

<div className="w-right">
<div className="w-right-wrapper">
  <div className="w-header">
    <div className="w-number">2</div>
    <div className="w-works">Works</div>
  </div></div></div>
<div className="card-list">
    <article className="card">
      <div className="card-header">
      <Card
      img={img1}
      href={"https://davidtirel95.github.io/restaurant/"}
      title="Café Bidule"
      date="Oct 25th 2021"
      desc="Html/Css" 
      desc2="Bootstrap"
      desc3="Restaurant web-app created using html/css and bootstrap library,
      the aim was to deploy a mockup to have an idea of the layout."           
      />
  </div>
  </article>
  <article className="card">
      <div className="card-header">
      <Card
      img={img2}
      href ={"https://jsm-realestate-kappa.vercel.app/"}
      title="Real-estate"
      date="March 11th 2022"
      desc="Next.js"
      desc2="Chakra-ui"   
      desc3="Real estate web-app created using Next.js, Chakra-ui library, Vercel and 
      RapidApi.
      The challenge was to develop it in a day. " 
      />
  </div>
  </article>
  </div>






</>

)}

export default WorksRight; 