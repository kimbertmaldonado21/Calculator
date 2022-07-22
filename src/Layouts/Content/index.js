import React,{ useState } from 'react'


function Index() {
  const [num, setNum] = useState("");  
  const [result, setResult] = useState("")

  const ops = ['/','*','+','-','.'];

  const updateCalc = value =>{
   if(
    ops.includes(value) && num === '' ||
    ops.includes(value) && ops.includes(num.slice(-1))
   ){
    return;
   }

    if(!ops.includes(value)){
      setResult(eval(num + value).toString());
    }
    setNum(num + value);

  }
  const makeDigits = () =>{
    const digits =[];
    for (let i=1; i<10; i++){
      digits.push(
        <button 
        onClick={()=>updateCalc(i.toString())} 
        key={i}>{i}
        </button>
      )
    }
    return digits;
  }
  const calculate = () =>{
    setNum(eval(num).toString());
  }
  const clear = () =>{
    setNum("");
    setResult("");
  }
  const deleteLast = () =>{
    if(num == ''){
      return;
    }
    const value = num.slice(0, -1);
    setNum(value);
  }
  return(
    <div className='calculator'>
      <div className='display'>
        {result ? <span>({result})</span> : '(0)'} &nbsp;
         { num  || "0"}
      </div>
      <div className='operators'>
        <button onClick={()=>updateCalc('*')}>x</button>
        <button onClick={()=>updateCalc('/')}>/</button>
        <button onClick={()=>updateCalc('+')}>+</button>
        <button onClick={()=>updateCalc('-')}>-</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={clear}>C</button>
      </div>
      <div className='digits'>
        {makeDigits()}
        <button onClick={()=>updateCalc('0')}>0</button>
        <button onClick={()=>updateCalc('.')}>.</button>
        <button onClick={calculate}>=</button>

      </div>
    </div>
  )
}
export default Index