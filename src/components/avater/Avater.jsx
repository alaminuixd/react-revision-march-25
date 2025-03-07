import React, { useEffect } from "react";

import "./Avater.css";
import userAvater from "./images/user.png";
import starEmpty from "./images/star-empty.png";
import starFilled from "./images/star-filled.png";
function Avater() {
  const [userInfo, setUserInfo] = React.useState({
    fName: "Jhon",
    lName: "Doe",
    phone: "+8816546112",
    email: "avater@gmail.com",
    isFevorite: false,
  });
  let starIcon = userInfo.isFevorite ? starFilled : starEmpty;
  let starIconTitle = userInfo.isFevorite ? "Fevorite" : "Not Fevorite";
  // handler function
  const handleFevorite = () => {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        isFevorite: !prevUserInfo.isFevorite,
      };
    });
  };
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <div className="avater-container">
      <div className="hero-image">
        <img src={userAvater} alt="" />
      </div>
      <div className="info">
        <button
          onClick={handleFevorite}
          aria-pressed={userInfo.isFevorite}
          aria-label={starIconTitle}
        >
          <img src={starIcon} alt={starIconTitle} />
        </button>
        <h2 className="avater-name">
          {userInfo.fName} {userInfo.lName}
        </h2>
        <p className="contact">{userInfo.phone}</p>
        <div className="contact">{userInfo.email}</div>
      </div>
    </div>
  );
}

export default Avater;
