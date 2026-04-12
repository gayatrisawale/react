var name='Learn React';
let x=12;
let y=3;

function FirstModule (){
  return (
    <>
    <h3>This is First Module</h3>
    <h3>Test React Function : {sum()}</h3>
    <h3>Test JSX with java Script : {name} : {x+y} </h3>
    <button onClick={()=>alert('Test')}>Click</button>

    <Fruit/>
    </>
  )
}

function Fruit(){
  return(
    <> 
    <h3>Red color: this is one Component used on another Component</h3>
    </>
  )
}

function sum(){
  return 10+10;
}
export default FirstModule