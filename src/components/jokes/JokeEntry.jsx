import React from "react";
import Joke from "./Joke";
/* import Joke from "./Joke"; */
import jokesData from "./jokesData";

function JokeEntry() {
  return (
    <div className="contacts">
      {jokesData.map((jokeData, index) => {
        const { setup, punchline, upVote, isRecent, comments } = jokeData;
        return (
          <article className="contact-card" key={index}>
            <Joke {...jokeData} />
          </article>
        );
      })}
    </div>
  );
}

export default JokeEntry;
