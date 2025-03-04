import React from "react";
import ButtonSuccess from "./ButtonSuccess";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./ContactCard.module.css";
import ButtonWarn from "./ButtonWarn";

function ContactCard(props) {
  // console.log(props);
  //const { img, title, phone, email } = props;
  const handleOnClick = (e) => {
    console.log("Cat added");
  };

  return (
    <article className={styles["contact-card"]}>
      <img
        src={props.img.src}
        alt={props.img.alt}
        width={"150px"}
        height={"150px"}
      />
      <h3>{props.title}</h3>
      <div className={styles["infoGroup"]}>
        <FaPhone />
        <p>{props.phone}</p>
      </div>
      <div className={styles["infoGroup"]}>
        <FaEnvelope />
        <p>{props.phone}</p>
      </div>
      <div className={styles["cartFooter"]}>
        <ButtonSuccess label={"Add Friend"} onClick={handleOnClick} />
        <ButtonWarn label={"Remove Friend"} onClick={handleOnClick} />
      </div>
    </article>
  );
}

export default ContactCard;
