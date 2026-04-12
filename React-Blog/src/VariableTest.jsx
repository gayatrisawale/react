function VariableTest(){
   var x=10;
   var y=20;

   return(
   <>
      <h3>Variable test</h3>
      {/*this is variable with operation +, -*/}
      <h3>Sum: {x+y} </h3>
      {/*This is function with if-elseCondion and switchCase*/}
      <h3>Operation :  {testOperation(50, 5, '+')}</h3>
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
      case '*':
         return (a*b);
         break;
         
      default:
         return "Invalid operation";   
   }
}
export default VariableTest;