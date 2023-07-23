import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./about";

const data:string[] = ['a','b','c','k'];

function App() {
  //const [count, setCount] = useState(0)
  const [state, setState] = useState<String>("test");


  return (
    <>
      <div className = "main" >
        <h1>hello world</h1>
        <About  data = {data}
                func  = {setState}/>
        <h1>{state}</h1>
        <input onChange = {(e) => setState(state + e.target.value)}/>
        {/* <button onClick={() => setState("state set!")}>click meee</button> */}
        {/* { data.map((item,idx) => (
          <h4 key = {idx}>{item}</h4>)
        )} */}
        {/* { data.map((item,idx) => {
          const itemProcess = item +"55"
          return <h4 key = {idx}>{itemProcess}</h4>
        })} */}
        {/* { data.map((item,idx) => {
         if (item === "a") return <h1 key = {idx}>AAA</h1>;
          else return <h4 key = {idx}>{item}</h4>
        })} */}

      </div>    
    </>
  );
}

export default App
