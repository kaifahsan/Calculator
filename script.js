function firstFunction() {
     display.value= eval(display.value)
}  
let lastInput ='';
function addOperator(value){
   const operators=['+','-','/','*'];
   if(operators.includes(lastInput) && operators.includes(value)){
    return;
   }
   display.value += value;
   lastInput =value;
}