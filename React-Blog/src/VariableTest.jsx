function VariableTest(){

   var x=10;
   var y=20;

 return(
   <>
      <h1>Variable test</h1>
      {/*this is variable with operation +, -*/}
      <h1>Sum: {x+y} </h1>
      {/*This is function with if-elseCondion and switchCase*/}
      <h1>Operation :  {testOperation(50, 5, '+')}</h1>
   </> 
 );
}

function testOperation(a, b, op){
   if (op=='+'){
      return (a+b)
   }
   
   switch(op){
      case '+':
         return (a+b);
         break;
      case '-':
         return (a-b);
         break;
      default:
         return "Invalid operation";   
   }
}
export default VariableTest;