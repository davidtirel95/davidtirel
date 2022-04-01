import React from 'react';
import "./works.css";
import Card from "../Card/Card";
import img1 from "../../../assets/b.png";
import img2 from "../../../assets/realtor.png";


const Works = () => {
  return (
     
    <div className="w"> 
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

        <div className="w-right">
          <div className="w-right-wrapper">
            <div className="w-header">
              <div className="w-number">2</div>
              <div className="w-works">Works</div>
            </div>
            <section className="card-list">
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
            </section>

          </div>
        
        </div>
        
    </div>
  )
}

export default Works;