import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [userInput, setUserInput] = useState("");

  var emojiDictionary = {
    "🙉": "Hear-no-evil-monkey",
    "🦮": "Guide Dog",
    "💦": "Sweat Drops",
    "🍃": "Leaf fluttering in the Wind",
    "🌈": "Rainbow",
    "🦖": "T-Rex",
    "💥": "Collision",
    "💫": "Dizzy",
    "💨": "Dashing away",
    "🐻‍❄️": "Polar Bear"
  };

  const emojiList = Object.keys(emojiDictionary);

  function function1(event) {
    var input = emojiDictionary[event.target.value];
    if (input === undefined && event.target.value !== "") {
      input = "We Do not have this in our Emoji-Bank!!";
    }
    setUserInput(input);
  }

  function emojiRecog(item) {
    setUserInput(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <header>
        <h1>Emoji kingdom!!</h1>
      </header>
      <input
        id="input-text"
        type="text"
        placeholder="enter anything"
        onChange={function1}
      ></input>
      <div id="emoji-txt">{userInput}</div>
      <h3> This is All We know!!</h3>
      <div>
        <ul id="list">
          {emojiList.map((item) => {
            return <li onClick={() => emojiRecog(item)}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
