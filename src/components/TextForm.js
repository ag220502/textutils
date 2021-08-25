import React,{useState} from 'react'

export default function TextForm(text) {
    const [wtext,settext] = useState("");
    const handleUp = ()=>{
        let newText = wtext.toUpperCase();
        settext(newText);
    }
    const handleLp = ()=>{
        let newText = wtext.toLowerCase();
        settext(newText);
    }
    const handleClr = ()=>{
        let newText = "";
        settext(newText);
    }
    const onchangeHandle = (e)=>{
        settext(e.target.value);
    }
    
    return (
        <>
        <div className="container">
            <h1>{text.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={wtext} onChange={onchangeHandle} id="mybox" rows="8"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUp}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLp}>Convert To Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleClr}>Clear Text</button>
            </div>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{wtext.split(' ').length} Words and {wtext.length} Charactors</p>
            <p> {(wtext.split(' ').length * 0.008).toFixed(4)} Minutes to read</p>
            <h2>Text Preview</h2>
            <p>{wtext}</p>
        </div>       
        </>
    )
}