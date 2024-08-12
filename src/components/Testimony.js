import React from "react";
import "../stylesheets/testimony.css"

function Testimony(props) {
    return (
    <div className="testimony-container">
        <img src={require(`../images/testimonio-${props.image}.png`)} alt="" className="testimony-image" />
        <div className="testimony-text-container">
            <p className="testimony-name"> <strong>{props.name}</strong> en {props.country}</p>
            <p className="job-position-name">{props.role} en <strong>{props.company}</strong></p>
            <p className="testimony-text">{props.testimony}</p>
        </div>
    </div>       
    )
}

export default Testimony;