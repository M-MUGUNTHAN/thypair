import React from 'react';
import * as Mole from '../Molecule';


export default function ChatBoxFooter(props) {
    return (
       <div style={{display:"flex",backgroundColor:"#E1E2E1"}}>
           <Mole.TextArea/>
           <a style={{color:"black"}} href="#"><i style={{fontSize:"2.3rem",margin:"10px 20px 0 20px"}} class="fas fa-microphone"></i></a> 
       </div>
    );
}
