import React, { useEffect, useState } from "react";

import "./TravelParent.css";
import data from "./data";

// import child component TravelBlog
import TravelBlog from "./TravelBlog";

function TravelParent() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs((prev) => [...prev, ...data]);
  }, []);
  // create element for the blog
  const entryElements = blogs.map((entry) => {
    return (
      <TravelBlog
        key={entry.id}
        img={entry.img /* { src: entry.img.src, alt: entry.img.alt } */}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    );
  });
  // main return
  return <>{blogs.length <= 0 ? <h3>No Data found!</h3> : entryElements}</>;
}

export default TravelParent;

/* <TravelBlog entry={entry} key={entry.id} /> */
