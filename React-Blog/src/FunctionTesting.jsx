function FunctionTesting(){
    function Callme(){
        alert("Testing of No Param Function");
    }
    const ArrowFunction=()=> alert("No param arrow function");
    const PassParamOnArrowFun=(Param)=>{
        alert(Param);
    }
    return(
        <>
        <h3>Function Testing example:</h3>
        <p>Click me:</p>
        <button onClick={Callme}>Call me</button>
        <button onClick={ArrowFunction}>Arrow Function</button>

        <button onClick={()=>PassParamOnArrowFun('Param1 Call')}>Param1Call</button>
        <button onClick={()=>PassParamOnArrowFun('Param2 Call')}>Param2Call</button>
        </>
    )
}
export default FunctionTesting;