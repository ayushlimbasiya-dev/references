import {useRef, useState} from 'react'
import State from './complements/State';
import './App.css'

function App() {
  const[time,setTime]=useState(0);
  let timeRef=useRef(null);

  function startTime(){
    timeRef.current =setInterval(()=>{
      setTime((time) =>time+1)
    },1000)
  }
  function stopTime(){
    clearInterval(timeRef.current);
    timeRef.current=null;
  }
  function resetTime(){
    stopTime();
    setTime(0);
  }

  // const [count,setCount]=useState(0);
  // let val= useRef(0);
  // let btnRef=useRef();

  // function handleincrement(){
  //   val.current=val.current+1;
  //   console.log("print val:",val)
  //   setCount(count+1);
  // }
  // useEffect(()=>{
  //   console.log("return render");
  // })
  // function changecolor(){
  //   btnRef.current.style.backgroundColor = "red";

 return(
  <div>
    <h1>stopwatch:{time}</h1>
    <button onClick={startTime}>
      start
    </button>
    <br></br>
    <button onClick={stopTime}>
      stop
    </button>
    <br></br>
    <button onClick={resetTime}>
      reset
    </button>
  </div>

  // <div>
  //   <button 
  //   ref={btnRef}
  //   onClick={handleincrement}>
  //     increment
  //   </button>
  //   <div>
  //     Count:{count}
  //   </div>
  //   <button onClick={changecolor}>
  //     change color in increment

  //   </button>


  // </div>
 )
}

export default App
