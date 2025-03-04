import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import "./TravelParent.css";

function TravelBlog(props) {
  console.log(props);
  return (
    <div className="travel-blog-container">
      <div className="hero-img-wrapper">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="contents">
        <div className="tag-container">
          <FaLocationDot className="locationDot" />
          <h4>{props.country}</h4>
          <a href={props.googleMapsLink} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h3 className="title">{props.title}</h3>
        <p className="date">{props.dates}</p>
        <p className="body">{props.text}</p>
      </div>
    </div>
  );
}

export default TravelBlog;

/* img={{ src: entry.img.src, alt: entry.img.alt }}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text} */
