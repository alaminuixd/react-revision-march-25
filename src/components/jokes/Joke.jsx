import React from "react";
import styles from "./Joke.module.css";

import PunchLine from "./PunchLine";

function Joke(props) {
  const [showPunch, setShowPunch] = React.useState(false);
  // hander functions
  const togglePunchLine = () => {
    setShowPunch((prev) => !prev);
  };
  return (
    <>
      {props.setup && <h3 className={styles["setup"]}>Setup: {props.setup}</h3>}
      <hr />
      {showPunch && <PunchLine {...props} />}
      <button
        className={`${styles["toggle-punch"]} ${
          styles[showPunch ? "show" : "hide"]
        }`}
        onClick={togglePunchLine}
      >
        {showPunch ? "Hide" : "Show"} punchline
      </button>
    </>
  );
}

export default Joke;
