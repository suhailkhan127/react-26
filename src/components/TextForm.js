import React, { useState } from 'react'

// in below code
// useState se value control karte hai
// text is a variable
// setText is a function for update value of text
// handleOnChange function will make field editable otherwise field will be readonly
// event.target.value is allowing to write content in textarea 
// we can rename functions name
export default function TextForm(props) {
	const [text, setText] = useState('Enter Text Here suhail')

	// 1 Uppercase
	const handleUpperCase = () => {
		// console.log("Handle Up Clicked!" + text);
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to Uppercase!", "danger", "Uppercase Alert")
	}
	// 2 Lowercase
	const handleLowerCase = () => {
		setText(text.toLowerCase());
		props.showAlert("Converted to Lowercase!", "primary", "Lowercase Alert")
	}

	// 3 Clear Text
	const handleClear = () => {
		setText("")
	}

	// 4 Reverse Text
	const handleReverse = () => {
		setText(text.split("").reverse().join(""))
	}

	// 5 Remove Extra Spaces
	const handleRemoveSpaces = () => {
		setText(text.replace(/\s+/g, " ").trim())
	}

	// 6 Capitalize First Letter
	const handleCapitalize = () => {
		setText(text.charAt(0).toUpperCase() + text.slice(1))
	}

	// 7 Copy Text
	const handleCopy = () => { 
		navigator.clipboard.writeText(text)
		alert("Text Copied!")
	}

	// 8 Add Full Stop
	const handleAddDot = () => {
		setText(text + ".")
	}

	// 9 Add Emoji
	const handleAddEmoji = () => {
		setText(text + " 😎")
	}

	// 10 Remove Numbers
	const handleRemoveNumbers = () => {
		setText(text.replace(/[0-9]/g, ""))
	}

	// 11 Convert to Title Case
	const handleTitleCase = () => {
		setText(
			text
				.toLowerCase()
				.split(" ")
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ")
		)
	}

	// 12 Remove Special Characters
	const handleRemoveSpecial = () => {
		setText(text.replace(/[^a-zA-Z0-9\s]/g, ""))
	}

	// 13 Count Words (Alert)
	const handleWordCount = () => {
		// let words = text.trim().split(/\s+/).filter(word => word !== "")
		let words = text.split(" ").length
		alert("Word Count: " + words)
	}

	// 14 Count Characters
	const handleCharCount = () => {
		alert("Character Count: " + text.length)
	}

	// 15 Convert to Binary
	const handleBinary = () => {
		setText(
			text.split("")
				.map(char => char.charCodeAt(0).toString(2))
				.join(" ")
		)
	}

	// 16 Convert to ASCII Codes


	// 17 Remove Vowels
	const handleRemoveVowels = () => {
		setText(text.replace(/[aeiouAEIOU]/g, ""))
	}

	// 18 Add Line Break After Every Word
	const handleLineBreak = () => {
		setText(text.split(" ").join("\n"))
	}

	// 19 Repeat Text Twice
	const handleRepeat = () => {
		setText(text + " " + text)
	}

	// 20 Convert to Alternating Case
	const handleAlternateCase = () => {
		setText(
			text
				.split("")
				.map((char, index) =>
					index % 2 === 0
						? char.toLowerCase()
						: char.toUpperCase()
				)
				.join("")
		)
	}

	// 21 Voice
	const handleVoice = () => {
		if (!text) return;
		const speech = new SpeechSynthesisUtterance(text);
		speech.lang = "en-US"; // change language if needed
		speech.rate = 1; // speed (0.5 slow - 2 fast)
		speech.pitch = 1; // voice pitch
		
		window.speechSynthesis.speak(speech);
	}


	const handleOnChange = (event) => {
		setText(event.target.value)
	}

	return (
		<div className='mt-4 container'>
			<h2>{props.heading}</h2>
			<h4>{text.split(/\s+/).filter(word => word.trim() !== "").length}: words, {text.length} Characters</h4>
			<p><b>Preview: </b> {text.length>0?text:"Nothing to Preview....."}</p>
			<div className="form-group">
				<textarea value={text} onChange={handleOnChange} className="form-control" rows="5"></textarea>
			</div>
			
			{/* below line will make disable button when textarea will be blank */}
			{/* disabled={text.length === 0} */} 
			<button disabled={text.length === 0} onClick={handleUpperCase} className="btn btn-primary m-1">Uppercase</button>
			<button disabled={text.length === 0} onClick={handleLowerCase} className="btn btn-success m-1">Lowercase</button>
			<button onClick={handleClear} className="btn btn-danger m-1">Clear Text</button>
			<button onClick={handleReverse} className="btn btn-secondary m-1">Reverse</button>
			<button onClick={handleRemoveSpaces} className="btn btn-warning m-1">Remove Extra Spaces</button>
			<button onClick={handleCapitalize} className="btn btn-info m-1">Capitalize</button>
			<button onClick={handleCopy} className="btn btn-dark m-1">Copy Text</button>
			<button onClick={handleAddDot} className="btn btn-success m-1">Add Dot</button>
			<button onClick={handleAddEmoji} className="btn btn-primary m-1">Add Emoji</button>
			<button onClick={handleRemoveNumbers} className="btn btn-danger m-1">Remove Numbers</button>

			<button onClick={handleTitleCase} className="btn btn-primary m-1">Title Case</button>
			<button onClick={handleRemoveSpecial} className="btn btn-dark m-1">Remove Special</button>
			<button onClick={handleWordCount} className="btn btn-outline-dark m-1">Word Count</button>
			<button onClick={handleCharCount} className="btn btn-warning m-1">Char Count</button>
			<button onClick={handleBinary} className="btn btn-secondary m-1">To Binary</button>
			<button onClick={handleRemoveVowels} className="btn btn-danger m-1">Remove Vowels</button>
			<button onClick={handleLineBreak} className="btn btn-info m-1">Line Break</button>
			<button onClick={handleRepeat} className="btn btn-success m-1">Repeat</button>
			<button onClick={handleAlternateCase} className="btn btn-secondary m-1">Alternate Case</button>
			<button onClick={handleVoice} className="btn btn-outline-dark m-1">
				<i className="fas fa-volume-down"></i> Voice
			</button>
			<br/><br/><br/><br/><br/>
		</div>
	)
}
