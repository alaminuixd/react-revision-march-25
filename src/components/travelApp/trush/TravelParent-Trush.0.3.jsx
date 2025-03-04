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
  // main return
  return (
    <>
      {blogs.length <= 0 ? (
        <h3>No Data found!</h3>
      ) : (
        blogs.map((entry) => {
          return <TravelBlog entry={entry} key={entry.id} />;
        })
      )}
    </>
  );
}

export default TravelParent;
