import React,{useState} from 'react'

export default function TextForm(text) {
    const [wtext,settext] = useState("");
    const handleUp = ()=>{
        let newText = wtext.toUpperCase();
        settext(newText);
        text.showAlert("Converted To Upper Case","success");
    }
    const handleLp = ()=>{
        let newText = wtext.toLowerCase();
        settext(newText);
        text.showAlert("Converted To Lower Case","success");
    }
    const handleClr = ()=>{
        let newText = "";
        settext(newText);
        text.showAlert("Text Box Cleared","success");
    }
    const onchangeHandle = (e)=>{
        settext(e.target.value);
    }
    
    return (
        <>
        <div className="container" style={{color:text.mode==="dark"?"white":"black"}}>
            <h1 style={{color:text.mode==="dark"?"#ef9636":"black"}}>{text.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={wtext} onChange={onchangeHandle} id="mybox" rows="8"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUp}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLp}>Convert To Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleClr}>Clear Text</button>
            </div>
        </div>
        <div className="container" style={{color:text.mode==="dark"?"white":"black"}}>
            <h1 style={{color:text.mode==="dark"?"#ef9636":"black"}}>Your Text Summary</h1>
            <p>{wtext.split(' ').length} Words and {wtext.length} Charactors</p>
            <p> {(wtext.split(' ').length * 0.008).toFixed(4)} Minutes to read</p>
            <h2 style={{color:text.mode==="dark"?"#ef9636":"black"}}>Text Preview</h2>
            <p>{wtext===""?"No Preview":wtext}</p>
        </div>       
        </>
    )
}