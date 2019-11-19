import React from 'react';
import * as Atom from '../Atom';


export default function TextArea(props) {
    const styles={
        InputStyle:{
            padding:"10px",
            outline:"none",
            border:"0px",
            fontSize:"1rem",
        }
    }
    return (
        <div style={{backgroundColor:"white",width:"max-content",margin:"auto",padding:"10px",borderRadius:"60px"}} >
            <a  style={{color:"black",fontSize:"1.5rem"}} href="#"><i class="fas fa-smile"></i></a>
            <Atom.Input InputStyle={styles.InputStyle} InputType="text"/>
          <a href="#" style={{color:"black",fontSize:"1.5rem"}} ><i class="fas fa-paperclip"></i></a>
        </div>

      
    );
}
