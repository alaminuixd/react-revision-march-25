import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import styles from "./CardEntry.module.css";

// import kitty cat card data
import cardData from "./cardData";

function CardEntry() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards((prev) => {
      return [...prev, ...cardData];
    });
  }, []);

  return (
    <div className={styles["contacts"]}>
      {cards.length <= 0 ? (
        <h2>No items found</h2>
      ) : (
        cards.map((card, index) => {
          // console.log(card);
          return <ContactCard key={index} {...card} />;
        })
      )}
    </div>
  );
}

export default CardEntry;

/* 
React
component folder path: src/components/kityCards
so kityCards as root
--root
  --cats
    cat-1.jpg
    cat-2.jpg
    cat-3.jpg
    cat-4.jpg
    cat-5.jpg
  cardData.js
  CardEntry.jsx
*/
