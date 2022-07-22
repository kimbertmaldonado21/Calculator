import React,{ useState } from 'react'


function Index() {
  const [num, setNum] = useState("");  
  const [result, setResult] = useState("")

  const ops = ['/','*','+','-','.'];

  const updateCalc = value =>{
    setNum(num, + value);
    alert(num);
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

  return(
    <div className='calculator'>
      <div className='display'>
        {result ? <span>(0)</span> : ''}
         { num  || "0"}
      </div>
      <div className='operators'>
        <button onClick={()=>updateCalc('*')}>x</button>
        <button onClick={()=>updateCalc('/')}>/</button>
        <button onClick={()=>updateCalc('+')}>+</button>
        <button onClick={()=>updateCalc('-')}>-</button>
        <button>DEL</button>
      </div>
      <div className='digits'>
        {makeDigits()}
        <button onClick={()=>updateCalc('0')}>0</button>
        <button onClick={()=>updateCalc('.')}>.</button>
        <button>=</button>

      </div>
    </div>
  )
}
export default Index