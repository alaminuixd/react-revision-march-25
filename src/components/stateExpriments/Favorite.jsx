import React from "react";
export default function Favorite() {
  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize
   * the state array as an empty array
   *
   * Don't worry about fixing `addFavoriteThing` quite yet.
   */
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  // following functoin will give an error after adding all item if there are not more items.
  function addFavoriteThing() {
    setMyFavoriteThings((prev) => [...prev, allFavoriteThings[prev.length]]);
  }
  // let's make a condition
  function addFavoriteThing2() {
    if (myFavoriteThings.length < allFavoriteThings.length) {
      setMyFavoriteThings((prev) => {
        console.log(prev.length);
        return [...prev, allFavoriteThings[prev.length]];
      });
    } else {
      alert("All items have been added!");
    }
  }

  return (
    <main>
      <button onClick={addFavoriteThing2}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}
