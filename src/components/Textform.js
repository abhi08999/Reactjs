import React ,{useState} from "react";//usestate to set the state 

export default function Textform(props) {
    const handleuppercase =()=>{
        console.log("uppercase"+text);
        let newText = text.toUpperCase();
        setText(newText) //set the value on click
        props.showAlert(" Converted to Uppercase", "success");
    }

    const handlelowercase =()=>{
        console.log("lowercase"+text);
        let newText = text.toLowerCase();
        setText(newText) //set the value on click
        props.showAlert(" Converted to Lowercase", "success");
    }
    const handleclear =()=>{
        console.log("lowercase"+text);
        let newText = " ";
        setText(newText) //set the value on click
        props.showAlert(" Text Cleared !", "success");
    }

    const handlecopy =()=>{
      let text= document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert(" Text Copied ! ", "success");
  }

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/)//regex
    setText(newText.join(" ")) //set the value on click
    props.showAlert(" Extra Spaces  has been Removed", "success");
}

    const handleonchange =(event)=>{
        console.log("on change");
        setText(event.target.value)//handle all values on change input
    }

    const [text ,setText]= useState(" ");//destructuring array HOOKS
    //text="new text";//wrong way to set 
    //setText("new text")//right way to set
  return (
      <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
      <h1 class="text-center"> {props.heading}</h1>
      <div className="mb-5">
        <textarea
          className="form-control" value = {text} onChange={handleonchange} 
          style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#042743'}}
          id="mybox"
          rows="9" 
        ></textarea> 
      </div>
      <button className=" btn btn-primary mx-2" onClick={handleuppercase}>convert uppercase</button>
      <button className=" btn btn-primary mx-2 " onClick={handlelowercase}>convert lowercase</button>
      <button className=" btn btn-primary mx-2 " onClick={handlecopy}>copy Text</button>
      <button className=" btn btn-primary mx-2 " onClick={handleExtraSpaces}>Remove Extra Space</button>
      <button className=" btn btn-primary mx-2 " onClick={handleclear}>clear text</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2> Your Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2> Preview</h2>
        <p>{text.length>0?text:"Enter in the above text to preview here"}</p>
    </div>
    </>
  );
}
