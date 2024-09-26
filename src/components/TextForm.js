import React from "react";
import { useState } from "react";


function TextForm(props) {
// state for text storing
const [text, setText] = useState("Enter your text here");
let summary = "Text summary"


// UpeerCase handler
let handleBtnUpperCase = ()=>{
  summary = "Text as been converted to upperCase"
   let upperCase = text.toUpperCase();
   setText(upperCase);
   props.showAlert("Text as been converted to upperCase",  "success");
}

// LowerCase handler
let handleBtnLowerCase = ()=>{
  summary = "Text as been converted to lowerCase"
   setText(text.toLowerCase());
   props.showAlert("Text as been converted to lowerCase",  "success");
}

// Random text generation
let handleBtnRandomTextGen = ()=>{
  let character ="nedewdewudhnsjkuciheneiewfwejkfbnncnasdiajicjewioewfnewhnfsakcnionciueuwhnvuivnsnviowdhniwerifjnfknweefewifjdsnfjkbnweeufcewrif";
  let result = "";
  for(let i = 0 ; i< 100 ; i++){
    result += character.charAt(Math.floor(Math.random() * character.length));
  }
   setText(result);
   props.showAlert("Random text generated",  "success");
}

// Random number generation
let handleBtnRandomNumGen = ()=>{
  const min = 1000;
  const max = 1000000;
  let result = Math.round( Math.random()*  ((max - min)+1) ) + min ;
  props.showAlert("Random number generated" ,  "success");
   setText(result.toString());
}

// Text clear
let handleBtnTextClr = ()=>{
  let  textClr = "";

  setText(textClr)
  props.showAlert("Text been cleared" , "success")
}


// text updation as  per the input
let handleOnchange = (event) =>{
  setText(event.target.value);
}

  return (
    <>
      <div className="container my-3" style={{color: props.mode === "dark" ? "white" :  "black"}}>

        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode === "dark" ? "#F5F5F5" : "white" , 
              color: props.mode === "dark" ? "black" : "#001F3F" 
            }}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnchange}
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleBtnUpperCase}>Convert to Upper Case</button>
        <button className="btn btn-primary me-3" onClick={handleBtnLowerCase}>Convert to Lower Case</button>
        <button className="btn btn-primary me-3" onClick={handleBtnRandomTextGen}>Random Text</button>
        <button className="btn btn-primary me-3" onClick={handleBtnRandomNumGen}>Random Number</button>
        <button className="btn btn-secondary me-3" onClick={handleBtnTextClr}>Clear</button>
      </div>

      <div className="container"  style={{color: props.mode === "dark" ? "white" :  "black"}}>

        <h1>{summary}</h1>
        <p> {text.split(' ').length} words and {text.length} characters</p>
        <p> {0.008*(text.split(' ').length)} miniute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
