import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /*let [counter,setCounter]=useState(15)
  //let counter=5
  const addValue=()=>{
   // console.log("clicked",counter);
    counter=counter+1
    setCounter(counter)
    
    
    if(counter>20){
     counter=20;
     setCounter(counter);
    }
  }
  const removeValue=()=>{
   // console.log("clicked",counter);
    counter=counter-1
    if(counter<20){
      setCounter(counter)
    }
    
    if(counter<0){
      counter=0;
      setCounter(counter);
    }
  }*/
    const [count, setCount] = useState(0);

    const addValue = () => {
      if (count < 20) {
        setCount(count + 1);
      }
    };
  
    const removeValue = () => {
      if (count > 0) {
        setCount(count - 1);
      }
     }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value</button><br/><br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}
export default App
