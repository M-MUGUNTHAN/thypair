import React,{useState} from 'react';
function Input(props) {
  return (
    <input style={props.InputStyle} type={props.type} value={props.value} 
    onChange={props.onChange}
     onFocus={props.onFocus}  placeholder={props.placeholder}/>
  );
}

export default Input;

