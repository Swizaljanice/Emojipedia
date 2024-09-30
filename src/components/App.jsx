import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEmoji(newemoji) {
  return (
    <Entry
      key={newemoji.id}
      emoji={newemoji.emoji}
      name={newemoji.name}
      meaning={newemoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
