import { createRoot } from "react-dom/client";
//import { Fragment } from "react";
import "./index.css";

const root = createRoot(document.getElementById("root"));

function HomeContent() {
  return (
    <article>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error alias
      fugit, commodi quo natus earum adipisci, ipsum illo sapiente eligendi
      quisquam in, dolores vitae quia optio deleniti iste excepturi laborum.
    </article>
  );
}

function About() {
  return (
    <main>
      <h2>About US</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        provident placeat ullam dicta laboriosam, laborum in aliquam omnis ex,
        repellendus ut cumque nemo molestiae quia ea ratione vel assumenda
        quisquam.
      </p>
    </main>
  );
}

root.render(
  <>
    <div className="container">
      <h1>Welcome to the main page</h1>
      <HomeContent />
      <About />
    </div>
  </>
);
