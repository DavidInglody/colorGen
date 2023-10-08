import Values from 'values.js';
import ColorList from './ColorList';
import Form from "./Form"
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';


const App = () => {
  const [colors,setColors] = useState(new Values("#f15025").all(10))
  


  return <main>
      <Form setColors={setColors}/>
      <ColorList colors={colors}/>
      <ToastContainer position="top-center"/>
  </main>
}
export default App
