import React from "react";
import styles from "./Joke.module.css";

function Joke(props) {
  const { setup, punchline, vote, isRecent, comments } = props;
  return (
    <>
      {setup && <h3 className={styles["setup"]}>Setup: {setup}</h3>}
      <hr />
      <p>Punchline: {punchline}</p>
      <p>Up vote: {vote + 1}</p>
      <p>
        Is Recent: {isRecent ? "It's a recent joke!" : "Sorry! it's an old one"}
      </p>
      <h3 className={styles["comments-title"]}>Comments: </h3>
      {comments &&
        comments.length > 0 &&
        comments.map((comment, index) => {
          const { author, text, title } = comment;
          return (
            <div key={index}>
              <p>Author: {author}</p>
              <p>Comment: {text}</p>
              <p>Title: {title}</p>
            </div>
          );
        })}
    </>
  );
}

export default Joke;
