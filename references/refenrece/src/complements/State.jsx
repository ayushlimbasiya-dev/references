import { useEffect, useRef, useState} from 'react'

function State() {
  const [count,setCount]=useState(0);
  let val= 1;

  function handleincrement(){
    val=val+1;
    console.log("print val:",val)
    setCount(count+1);
  }
  useEffect(()=>{
    console.log("return render");
  })

 return(
  <div>
    <button onClick={handleincrement}>
      increment
    </button>
    <div>
      Count:{count}
    </div>


  </div>
  )
}

export default State
