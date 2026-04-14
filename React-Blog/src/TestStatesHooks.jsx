import {useState} from "react";
function TestStatesHooks() {
    /* This is a simple example of using state in a functional component without using the useState hook.
    let fruits = 'Apple';
    function handleClick() {
        fruits='Banana';
        //console.log(fruits);
    } 
    return (
        <div>
            <h3>Test States Hooks : {fruits}</h3>
            <button onClick={handleClick}>Change Fruit</button>
        </div>
    );
    */
    const [fruit, setFruit]=useState("Mango");
    const [count, setCount]=useState(0);
    function handleClick(){
        setFruit("Cherry");
    }

    const getCount=()=>{
        setCount(count+1);     
    }
    return(
        <>
        <h3>Performing state practice</h3>
        <h3>Fruit: {fruit}</h3>
        <button onClick={handleClick}>Change Fruit</button>
        <h3>Count : {count}</h3>
        <button onClick={getCount}>Get Count</button>
        </>
    )
    
}

export default TestStatesHooks; 