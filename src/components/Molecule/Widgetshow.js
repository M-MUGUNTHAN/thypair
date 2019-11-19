import React from 'react';
import * as Atom from '../Atom';
import styled from 'styled-components';
export default function WidgetShow(props) {
    const styles={
      ButtonStyle:{
      position:"absolute",
      top:"150px",
      left:"0px",
      height:"40px",
      width:"40px",
      backgroundColor:"#FF5ABC",
      borderRadius:"50%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      border:"0px"
    },
    CancelButton:{
       height:"50px",
       width:"50px",
       backgroundColor:"white",
       borderRadius:"50%",
       fontSize:"2.5rem",
       color:"#A70036",
       outline:"none",
       border:"0px"
    }
    };
    return (
        <div style={{position:"absolute",top: "-120px",right: "-120px"}}>
        <div style={{position:"relative",height:"300px",width:"300px",
              display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Atom.Button ButtonStyle={styles.ButtonStyle}>
                     <i style={{fontSize:"1.5rem"}} class="fas fa-phone"></i>
                </Atom.Button>
                <Atom.Button ButtonStyle={{...styles.ButtonStyle,top:"210px",left:"20px"}}>
                     <i  style={{fontSize:"1.5rem"}}  class="fas fa-video"></i>
                </Atom.Button>
                <Atom.Button ButtonStyle={{...styles.ButtonStyle,top:"250px",left:"70px"}}>
                     <i  style={{fontSize:"1.5rem"}}  class="fas fa-camera"></i>
                </Atom.Button>
                <Atom.Button ButtonStyle={{...styles.ButtonStyle,top:"260px",left:"130px"}}>
                     <i  style={{fontSize:"1.5rem"}}  class="fas fa-map-marker-alt"></i>
                </Atom.Button>

            <div style={{width:"202px",height:"202px",border:"3px solid #FF5A8C",
              borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{width: "162px",height: "162px",backgroundColor:"#FF5ABC",borderRadius:"50%",
            display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Atom.Button ButtonStyle={styles.CancelButton}>&times;</Atom.Button>
                </div>

            </div>
        </div>
        </div>
    );
}
