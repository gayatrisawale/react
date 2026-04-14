import { useState } from "react"

function MultipleCheckRendering(){
    const [count, setCount]=useState(0);
    function Counter(){
        setCount(count+1) 
    }
    return (

        <>
        <h3>Multiple Check Rendering</h3>
        { count==0? <h3>Count:{count} Inceremnet Count:{count}</h3>
          :count==1? <h3>Count:{count} Inceremnet Count:{count}</h3>
          :count==2? <h3>Count:{count} Inceremnet Count:{count}</h3>
          : <h3>No Count</h3>
        }
        <button onClick={Counter}>Counter</button>
        </>
    )
}

export default MultipleCheckRendering