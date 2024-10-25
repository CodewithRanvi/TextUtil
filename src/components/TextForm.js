import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase button was clicked");
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to uppercase", "Success");
    }
    const handleLoClick = () => {
        console.log("Lowercase button was clicked");
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to lowercase", "Success");
    }
    const handleCapitalizeClick = () => {
        console.log("Capitalize button was clicked");
        const newText = text
            .toLowerCase() // First, we lower case the text to avoid incorrect results.
            .split(' ')    // Split the text into an array of words based on spaces.
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word.
            .join(' ');    // Join the words back into a single string.
        setText(newText);
        props.showAlert("Capitalized first letter", "Success");

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "Success");

    }

    const handleClearClick = () => {
        console.log("Lowercase button was clicked");
        setText('');
        props.showAlert("Cleared textbox", "Success");

    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState(''); //text has value 'Enter text here' currently
    // text = "new text"; //wrong way to change text
    // setText("new text");//right way to change text
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div>
                    <h1 className="my-3">{props.input}</h1>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleUpClick} disabled={text.length === 0}>Change to Uppercase</button>
                    <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleLoClick} disabled={text.length === 0}>Change to Lowercase</button>
                    <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleCapitalizeClick}>Capitalize Words</button>
                    <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleCopy}>Copy Text</button>
                    <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleClearClick} >Clear Screen</button>
                </div>
                <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h1>Your Text Summary</h1>
                    <p>{text.split(".").length - 1} sentences {text.split(" ").length} words and {text.length} characters</p>
                    <h1>Preview</h1>
                    <p>{text.length === 0 ? "Write your text in the texbox area above to preview" : text}</p>
                </div>
            </div></>
    )
}   
