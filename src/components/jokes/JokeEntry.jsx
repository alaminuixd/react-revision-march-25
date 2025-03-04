import React from "react";
import Joke from "./Joke";
/* import Joke from "./Joke"; */
import jokesData from "./jokesData";

function JokeEntry() {
  return (
    <div className="contacts">
      {jokesData.map((joke, index) => {
        const { setup, punchline, upVote, isRecent, comments } = joke;
        return (
          <article className="contact-card" key={index}>
            <Joke
              setup={setup}
              punchline={punchline}
              vote={upVote}
              isRecent={isRecent}
              comments={comments}
            />
          </article>
        );
      })}
    </div>
  );
}

export default JokeEntry;
