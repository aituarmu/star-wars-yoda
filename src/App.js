import axios from "axios";
import { useState } from "react";
import logo from "./logo.svg";
import "./style.css";

export default function App() {

let [text, setText] = useState("");
let [yodaText, setYodaText] = useState("");

  const onTranslateClick = () => {
    // console.log("translate" + text)
    axios.post("/translate/yoda.json", { text })
    .then(res => {
      const { translated} = res.data.contents;
      setYodaText(translated)
    })
    .catch(err => {
      console.log(err)
    })
  }

	return (
		<div className="app">
			<h1>Star Wars Yoda Translator</h1>
			<label>English</label>
			<br />
			<input
				className="textInput"
				type="text"
        value={text}
        onChange={e =>setText(e.target.value)}
				placeholder="Type your text here"
			/>
			<button className="btn" onClick={onTranslateClick}>Translate</button>
			<br />
			<label>Yoda</label>
			<div className="yoda--translation">
				<p className="yoda--translation__text">{yodaText}</p>
			</div>
		</div>
	);
}
