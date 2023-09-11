import React,{useState} from 'react'

const TextForm = (props) => {
  const handleUpClick = ()=>{
  console.log("upper case was click" +text)
   const newText = text.toUpperCase();
  setText(newText)
  }
  const handleOnChage = (event)=>{
    console.log("upper case was click")
    setText(event.target.value)

      }
      const handleupdown = (event)=>{
        console.log("upper case was removed")
        setText(event.target.value)
    
          }
          const handleuplower = (event)=>{
            console.log("Convert Lowercase")
        const newText = text.toLowerCase();
  setText(newText)
              }

              
  const  [text ,setText] = useState("")
  return (
    
   <>
<div className="container">
<h1>{props.hea}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChage}  id="Mytext" rows="8"></textarea>
</div>
  <button className="btn btn-primary mx-2" onClick= {handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-secondary mx-2" onClick= {handleupdown}>Text Remove</button>
  <button className="btn btn-danger mx-2" onClick= {handleuplower}>Convert to Lowercase</button>
  </div>
  <div className="container my-4" >
    <h1>Your text summmary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{ 0.008* text.split(" ").length} Minutes read</p>
    <h1>Preview</h1>
    <p>{text}</p>
  </div>

    </>
  )
}

export default TextForm
