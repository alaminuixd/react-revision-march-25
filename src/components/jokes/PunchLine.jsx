import React from "react";
import styles from "./Joke.module.css";

function PunchLine({ punchline, vote, isRecent, comments }) {
  return (
    <div>
      <p>Punchline: {punchline}</p>
      <p>Up vote: {vote + 1}</p>
      <p>
        Is Recent: {isRecent ? "It's a recent joke!" : "Sorry! it's an old one"}
      </p>
      <div className={styles["joke-comment-wrapper"]}>
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
      </div>
    </div>
  );
}

export default PunchLine;
