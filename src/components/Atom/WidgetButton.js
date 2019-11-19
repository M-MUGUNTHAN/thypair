import React from 'react';
import styled from 'styled-components';
import Button from './button';
function WidgetButton(props) {
 
  return (
    <div style={props.WidgetButtonStyle}>
    <button onClick={props.onClick} style={{height:"50px",width:"50px",borderRadius:"50%",backgroundColor: "#FF5A8C",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",border:"0px",outline:"none"}}>
       <p style={{marginLeft:"15px",height:"2px",width:"15px",backgroundColor:"white",marginBottom:"2px"}}></p>
        <p style={{marginLeft:"9px",height:"2px",width:"21px",backgroundColor:"white",marginTop:"0px"}}></p>
    </button>
    </div>
  );
}

export default WidgetButton;
