import {useState} from "react"
import Values from 'values.js';
import { toast } from 'react-toastify';
const Form = ({setColors})=> {

  const[color, setColor] = useState("")

  const submitForm =(e)=>{
    e.preventDefault()
    try {
      setColors(new Values(color).all(10))
    } catch (error) {
      toast.error(error.message)
    }
  };

  return <section className="container">
      <h4>Color Generator</h4>
    <form className="color-form" onSubmit={submitForm}>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <input type="text" value={color} placeholder="#f15025"  onChange={(e) => setColor(e.target.value)} />
      <button style={{background:color}} className="btn">Generate</button>
    </form>
  </section>


} 
 



export default Form;
  