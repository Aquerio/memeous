
import "./FormText.css"

const FormText = ({formSmallText, formLargeText}) => {

 
  return (
    <>
    
<div className="text-[#FFFFFF] text-center mb-9">

  <p className="small_text">{formSmallText}</p>
    <p className="large_text">{formLargeText}</p>
</div>
       
   
   
    </>
  )
}

export default FormText