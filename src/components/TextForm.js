import React, {useState} from 'react'

function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success")
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success")
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#36454F':'white', color: props.mode==='dark'?'white':'black'}}id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>To Upper Case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>To Lower Case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button type="submit" onClick={handleSpeak} className="btn btn-primary mx-2 my-2">Speak</button>


    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h5>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</h5>
        <h1>Preview</h1>
        <p>{text.length>0?text:'Your text will be shown here'}</p>
    </div>
    </>
  )
}

export default TextForm
