var name='Learn React';
let x=12;
let y=3;

function FirstModule (){
  return (
    <>
    <h1>Test React Function : {sum()}</h1>
    <h1>Test JSX with java Script : {name} : {x+y} </h1>
    <button onClick={()=>alert('Test')}>Click</button>


    <Fruit/>
    </>
  )
}


function Fruit(){
  return(
    <> 
    <h1>Red color</h1>
    </>

  )
}

function sum(){
  return 10+10;
}
export default FirstModule