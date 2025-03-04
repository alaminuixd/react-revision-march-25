import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import "./TravelParent.css";

function TravelBlog({ img, country, googleMapsLink, title, dates, text }) {
  return (
    <div className="travel-blog-container">
      <div className="hero-img-wrapper">
        <img src={img.src} alt={img.alt} />
      </div>
      <div className="contents">
        <div className="tag-container">
          <FaLocationDot className="locationDot" />
          <h4>{country}</h4>
          <a href={googleMapsLink} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h3 className="title">{title}</h3>
        <p className="date">{dates}</p>
        <p className="body">{text}</p>
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
