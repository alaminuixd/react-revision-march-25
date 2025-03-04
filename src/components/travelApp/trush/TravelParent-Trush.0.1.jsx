import React, { useEffect, useState } from "react";

import "./TravelParent.css";
import data from "./data";
import { FaLocationDot } from "react-icons/fa6";

function TravelParent() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs((prev) => [...prev, ...data]);
  }, []);
  return (
    <div className="travel-blog-container">
      <div className="hero-img-wrapper">
        <img src="./src/components/travelApp/images/mount_fuji.jpg" alt="" />
      </div>
      <div className="contents">
        <div className="tag-container">
          <FaLocationDot className="locationDot" />
          <h4>Japan</h4>
          <a href="#">View on Google Maps</a>
        </div>
        <h3 className="title">Mount Fuji</h3>
        <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="body">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default TravelParent;
