import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "Laughing (not crying emoji, boomers)",
  "🙈": "See-No-Evil and not a shy face",
  "😤": "Shivji when he first met Ganeshji",
  "💫": "It's dizzy guys, not heaven",
  "❤️": "Love, the thing missing from your life",
  "🙏": "The one you use while asking for assignments",
  "😎": "When you comment first on youtube",
  "🥱": "After doing nothing all day"
};

const emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Type an emoji or click one");

  function emojiInputHandler(event) {
    let input = event.target.value;
    let meaning = emojiDictionary[input];
    if (meaning === undefined) {
      setMeaning("we don't have this meaning in our database");
    } else {
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(item) {
    setMeaning(emojiDictionary[item]);
    let input = document.querySelector("input");
    input.value = item;
  }

  return (
    <div className="App">
      <h1>FUNNY EMOJI TRANSLATOR</h1>
      <input
        style={{ textAlign: "center", fontSize: "1.7rem" }}
        onChange={emojiInputHandler}
      />
      <h2>
        {meaning}
        <br />
        <br />
      </h2>
      <h3>emojis we know</h3>
      {emojiWeKnow.map((item) => {
        return (
          <span
            key={item}
            onClick={() => emojiClickHandler(item)}
            style={{ padding: "1rem", fontSize: "1.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

// ex05
// var name = "shubham";
// var color = "#1DA1F2";
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Emoji Translate</h1>
//       <h1 >Welcome, <span style={{color: color}}>{name}</span></h1>
//     </div>
//   );
// }

// ex06
// export default function App() {
//   function clickCounter() {
//     console.log("liked");
//   }

//   return (
//     <div className="App">
//       <h1>Like counter</h1>
//       <button onClick={clickCounter}>Like</button>
//     </div>
//   );
// }

// ex07
// export default function App() {
//   var  likeCounter = 0;
//   function clickCounter() {
//     likeCounter++;
//     console.log("Like: ", likeCounter);
//   }
//   return (
//     <div className="App">
//        <h1>Like Counter (check Console)</h1>
//       <button onClick={clickCounter}>Like</button>
//     </div>
//   );
// }

// ex08
// export default function App() {
//   const [likeCounter, setLikeCounter] = useState(0);
//   function clickCounter() {
//     setLikeCounter(likeCounter + 1);
//   }
//   return (
//     <div className="App">
//       <h1>Like Counter</h1>
//       <button onClick={clickCounter}>Like</button>
//       <span>  {likeCounter}  </span>
//     </div>
//   );
// }

// ex10
// export default function App() {
//   const [userInput, setUserInput] = useState("");
//   function inputChangeHandler(event) {
//     setUserInput(event.target.value);
//     console.log(event.target.value);
//   }
//   return (
//     <div className="App">
//       <h1>Emoji translate</h1>
//       <input onChange={inputChangeHandler} />
//       <h2>{userInput}</h2>
//     </div>
//   );
// }

// ex11
// const dictionary = {
//   hello: "shubham",
//   how: "are you?"
// };

// export default function App() {
//   const [userInput, setUserInput] = useState("");
//   function inputChangeHandler(event) {
//     var emoji = event.target.value;
//     var meaning = dictionary[emoji];

//     if (meaning === undefined) {
//       setUserInput("");
//     } else {
//       setUserInput(meaning);
//     }
//   }
//   return (
//     <div className="App">
//       <h1>Emoji translate</h1>
//       <input onChange={inputChangeHandler} />
//       <h2>{userInput}</h2>
//     </div>
//   );
// }

// ex12 and ex13
// const dictionary = {
//   hello: "shubham",
//   how: "are you?"
// };

// const dictionaryList = Object.keys(dictionary);

// export default function App() {
//   const [userInput, setUserInput] = useState("");
//   function inputChangeHandler(event) {
//     var emoji = event.target.value;
//     var meaning = dictionary[emoji];

//     if (meaning === undefined) {
//       setUserInput("");
//     } else {
//       setUserInput(meaning);
//     }
//   }
//   return (
//     <div className="App">
//       <h1>Emoji translate</h1>
//       <input onChange={inputChangeHandler} />
//       <h2>{userInput}</h2>
//       {dictionaryList.map((item) => {
//         return <span key={item}>{item}</span>;
//       })}
//     </div>
//   );
// }

// ex14
// const dictionary = {
//   hello: "shubham",
//   how: "are you?"
// };

// const dictionaryList = Object.keys(dictionary);

// export default function App() {
//   const [userInput, setUserInput] = useState("");
//   function inputChangeHandler(event) {
//     var emoji = event.target.value;
//     var meaning = dictionary[emoji];

//     if (meaning === undefined) {
//       setUserInput("");
//     } else {
//       setUserInput(meaning);
//     }
//   }

//   function mouseHoverHandler(item) {
//     var meaning = dictionary[item];
//     setUserInput(meaning);
//   }

//   return (
//     <div className="App">
//       <h1>Emoji translate</h1>
//       <input onChange={inputChangeHandler} />
//       <h2>{userInput}</h2>
//       {dictionaryList.map(function (item) {
//         return (
//           <span
//             onMouseEnter={() => {
//               mouseHoverHandler(item);
//             }}
//             key={item}
//           >
//             {" "}
//             {item}{" "}
//           </span>
//         );
//       })}
//     </div>
//   );
// }
