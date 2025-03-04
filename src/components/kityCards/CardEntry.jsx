import React from "react";
import ContactCard from "./ContactCard";
import styles from "./CardEntry.module.css";

// cats images
import cat1 from "./cats/cat-1.jpg";
import cat2 from "./cats/cat-2.jpg";
import cat3 from "./cats/cat-3.jpg";

function CardEntry() {
  return (
    <div className={styles["contacts"]}>
      <ContactCard
        imgSrc={cat1}
        imgAlt={"Cat One"}
        title={"Mr Pikason"}
        phone={"48965164"}
        email={"pikason@gmail.com"}
      />
      <ContactCard
        imgSrc={cat1}
        imgAlt={"Cat One"}
        title={"Mr Pikason"}
        phone={"48965164"}
        email={"pikason@gmail.com"}
      />
      <ContactCard
        imgSrc={cat1}
        imgAlt={"Cat One"}
        title={"Mr Pikason"}
        phone={"48965164"}
        email={"pikason@gmail.com"}
      />
    </div>
  );
}

export default CardEntry;
