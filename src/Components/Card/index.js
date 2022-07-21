import React from 'react'
import Button from '../Button/index';
const index = (props) => {
  const numbers = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/",".","="];


  return (
    <div className='card card-primary'>
        <div className='card-header'>
            {props.header}
        </div>
        <div className='card-body'>
            <div className='input-group'>
              <input type="text" className='form-control form-control-border' readOnly/>
            </div>
            <div className='row card-body-row'>
              {numbers.map((number)=>(
                  <Button button={number}/>
              ))}  
            </div>
            
        </div>
    </div>
  )
}

export default index