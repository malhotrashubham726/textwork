import React,{ useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleDownClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text get cleared","success");
        
    }

    const copyText = () => {
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");
    }

    const extraSpaces = () => {
        let regEx = /[ ]+/g;
        setText(text.replace(regEx," "));
        props.showAlert("Extra Spaces Removed","success");
    }

    const [text,setText] = useState("");

  return (
        <>
        <div className='container' style={{color : props.mode==="dark"? "white" : '#042743'}}>
            <h1 className='my-2 mb-3' style={{fontSize:"30px"}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor : props.mode==="light" ? "white":"black",color : props.mode==="dark"? "white" : "black"}} onChange={handleOnChange}></textarea>
            </div>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearText}>Clear text</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy text</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={extraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode==="dark"? "white" : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/g).filter((element) => { return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => { return element.length!==0 }).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text : "Enter something in textbox to preview it here"}</p>
        </div>
        </>
  )
}
