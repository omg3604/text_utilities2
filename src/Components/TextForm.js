import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');          // declaring state variable
    const [prevText, setPrevText] = useState('');

    const handleUpperClick = () => {
        if(text.length===0){
            props.showAlert("warning" , "No text to manipulate")
        }
        setText(text.toUpperCase());
    }

    const handleLowerClick = () => {
        if(text.length===0){
            props.showAlert("warning" , "No text to manipulate")
        }
        setText(text.toLowerCase());
    }

    const handleRemoveNumberClick = () => {
        if(text.length===0){
            props.showAlert("warning" , "No text to manipulate")
        }
        let withNoDigits = text.replace(/[0-9]/g, '');
        setText(withNoDigits);
    }

    const handleRemoveLetterClick = () => {
        if(text.length===0){
            props.showAlert("warning" , "No text to manipulate")
        }
        let withNoLetters = text.replace(/[a-zA-Z]/g, "");
        setText(withNoLetters);
    }

    const handleRemoveSpecialClick = () => {
        if(text.length===0){
            props.showAlert("warning" , "No text to manipulate")
        }
        let withNoSpecial = text.replace(/[^a-zA-Z0-9]/g, '');
        setText(withNoSpecial);
    }

    const handleClearClick = () => {
        if(text.length===0){
            props.showAlert("warning" , "No text to Clear")
        }
        setText("");
        props.showAlert("success" , "Text Area has been cleared.")
    }

    const handleCopyClick = () => {
        var txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("success" , "Text Copied Successfully.")
    }

    const handleRemoveSpaceClick = () => {
        if(text.length===0){
            props.showAlert("warning" , "No text to manipulate")
        }
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
    }

    const handleUndoClick = () => {
        if(text.length===0){
            props.showAlert("warning" , "No text to undo")
        }
        setText(prevText);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
        setPrevText(e.target.value);
    }

    return (
        <>
            <div>
                <div className="container mb-3 mt-5">
                    <label htmlFor="myBox" className={`form-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Enter text to analyze: </label>
                    <textarea className={`form-control bg-${props.mode === 'dark' ? 'secondary' : 'light'} bg-gradient text-${props.mode === 'dark' ? 'light' : 'dark'}`} placeholder="Enter text here! " value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <div className='container d-flex flex-row flex-wrap justify-content-between'>
                        <div>
                            <p className={`float-right mx-2 my-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Character Count : {text.length} , Word Count : {text.split(" ").length - 1}</p>
                        </div>
                        <div>
                            <button className={`btn btn-outline-warning border border-warning mx-3 my-3`} onClick={handleUndoClick}>Undo Changes</button>
                            <button className={`btn btn-outline-primary border border-primary mx-2 my-2`} onClick={handleCopyClick}>Copy Text</button>
                            <button className='btn btn-outline-danger mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
                        </div>
                    </div>
                </div>
                <div className={`container m-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}><h4>Manipulation Tools</h4></div>
                <div className="container d-flex flex-row flex-wrap justify-content-around">
                    <button className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} border border-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={handleUpperClick}>Convert to UpperCase</button>
                    <button className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} border border-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={handleLowerClick}>Convert to LowerCase</button>
                    <button className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} border border-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={handleRemoveNumberClick}>Remove Numeric digits</button>
                    <button className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} border border-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={handleRemoveLetterClick}>Remove English letters</button>
                    <button className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} border border-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={handleRemoveSpecialClick}>Remove Special characters</button>
                    <button className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} border border-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={handleRemoveSpaceClick}>Remove Extra Spaces</button>
                </div>
            </div>
        </>

    )
};
