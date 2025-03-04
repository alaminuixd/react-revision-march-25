import React from "react";
import ButtonSuccess from "./ButtonSuccess";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./ContactCard.module.css";
import ButtonWarn from "./ButtonWarn";

function ContactCard(props) {
  const { imgSrc, imgAlt, title, phone, email } = props;
  const handleOnClick = (e) => {
    console.log("Cat added");
  };

  return (
    <article className={styles["contact-card"]}>
      <img src={imgSrc} alt={imgAlt} width={"150px"} height={"150px"} />
      <h3>{title}</h3>
      <div className={styles["infoGroup"]}>
        <FaPhone />
        <p>{phone}</p>
      </div>
      <div className={styles["infoGroup"]}>
        <FaEnvelope />
        <p>{email}</p>
      </div>
      <div className={styles["cartFooter"]}>
        <ButtonSuccess label={"Add Friend"} onClick={handleOnClick} />
        <ButtonWarn label={"Remove Friend"} onClick={handleOnClick} />
      </div>
    </article>
  );
}

export default ContactCard;
