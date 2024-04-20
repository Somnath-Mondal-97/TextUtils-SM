import React,{useState} from 'react'
import './Page.css'

const ErrorAlert = ({ errorMessage, alertClass }) => {
    return (
      <div className={`alert alert-${alertClass} alert-dismissible fade show`} role="alert">
        <strong>{errorMessage}</strong>
      </div>
    );
  };

const TextForm = (prop) => {
    const [text,setText] = useState('')
    const [result,setResult] = useState("")
    const [errMsg,setErrMsg] = useState(null)
    const [alertClass,setAlertClass] = useState('')
    const handleUPClick = () => {
        let newText = text.toUpperCase()
        setResult(newText)
        if(text===''){
            setErrMsg("Can't perform CONVERT TO UPPERCASE. Write Something on TextArea")
            setAlertClass('danger')
            setTimeout(()=>{
                setErrMsg(null)
            },3000)
        }else{
            setErrMsg('CONVERTED TO UPPERCASE')
            setAlertClass('success')
            setTimeout(()=>{
                setErrMsg(null)
            },3000)
        }
    }
    const handleLOWClick = () => {
        let newText = text.toLowerCase()
        setResult(newText)
        if(text===''){
            setErrMsg("Can't perform CONVERT TO LOWERCASE Write Something on TextArea")
            setAlertClass('danger')
            setTimeout(()=>{
                setErrMsg(null)
            },3000)
        }else{
            setErrMsg('CONVERTED TO LOWERCASE')
            setAlertClass('info')
            setTimeout(()=>{
                setErrMsg(null)
            },3000)
        }
    }
    const removeExtraSpaces = () =>  {
        let newText = text.replace(/\s{2,}/g, ' ');
        setResult(newText)
        if(text===''){
            setErrMsg("Can't perform REMOVE EXTRA SPACES. Write Something on TextArea")
            setAlertClass('danger')
            setTimeout(()=>{
                setErrMsg(null)
            },3000)
        }else{
            setErrMsg('REMOVED EXTRA SPACES')
            setAlertClass('warning')
            setTimeout(()=>{
                setErrMsg(null)
            },3000)
        }
    }
    const handleClear = () => {
        setText('')
        if(text===''){
            setErrMsg("Can't perform CLEAR. Write Something on TextArea")
            setAlertClass('danger')
            setTimeout(()=>{
                setErrMsg(null)
            },3000)
        }else{
            setErrMsg('CLEARED')
            setAlertClass('dark')
            setTimeout(()=>{
                setErrMsg(null)
            },3000)
        }
    }
    const handleChange = (event) => {
        setText(event.target.value)
        setResult("Perform Your Operation")
    }
  return (
    <>
    <div style={{height:'50px'}}>
      {errMsg && <ErrorAlert errorMessage={errMsg} alertClass={alertClass}/>}
    </div>
    <div>
      <div className="container pt-3">
        <div className="col-lg-10 m-auto">
            <h1 className='text-form-heading'>{prop.heading}</h1>
            <textarea className="form-control mt-3 mb-3 text-form-text-area" value={text} onChange={handleChange} id="mytext" rows="12"></textarea>
            <div className="text-form-buttons">
                <button className="btn btn-info" onClick={handleUPClick}>Convert To UpperCase</button>
                <button className="btn btn-info" onClick={handleLOWClick}>Convert To LowerCase</button>
                <button className='btn btn-info' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className={`btn btn-danger`} onClick={handleClear}>Clear</button>
            </div>
            {text.length>0 ?<div style={{color:`${prop.mode === 'dark' ? 'white':''}`}}>
            <h1 className='text-form-heading-result mt-2'>Result</h1>
            <h3>{result}</h3>
            <h1 className='text-form-heading-summary mt-2'>Text Summary</h1>
            <h3>{text.length > 0 ? text.split(' ').length : 0} Words and {text.length} Characters</h3>
            <h2>{text.length > 0 ? (0.008 * text.split(' ').length) : 0} Minutes Reading Time</h2>
            </div> : <div></div>} 
            
        </div>
      </div>
    </div>
    </>
  )
}

export default TextForm
