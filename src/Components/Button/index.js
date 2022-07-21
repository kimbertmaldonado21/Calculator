import React,{useState} from 'react'

export default function index(props){
  return(
    <div>
      <button className='btn btn-primary btn-lg'>
          {props.button}
      </button>
    </div>
  );
}
