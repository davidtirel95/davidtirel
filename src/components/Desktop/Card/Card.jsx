import * as React from 'react';
import "./card.css";


const Card = ({title, img, date, desc, desc2, desc3, href}) => {
  return (
 <>
<div>
  <div>
    <div className="card-title" >{title} 
  </div>
<div>
  <a href={href} target="_blank" rel="noreferrer">
    <img className="card-img" src={img} alt="card"/>
  </a>
</div>
<div className="card-date">{date}</div>
<div className="languages-container">
  <div className="card-languages">{desc}</div>
</div>
<div className="card-libraries">
  <div className="card-libraries">{desc2}</div>
</div>
<div className="card-desc3">{desc3}</div>
 </div>
 </div>
 </>
  )
}
export default Card; 