import React from 'react';
import * as Atom from '../Atom';
import {Link} from 'react-router-dom';

export default function Createprofile(props) {
  const styles = {
    ButtonStyle:{
        height:"100%",
        width:"65%",
        background: "#FF5A8C",
        outline:"none",
        color:"white",
        textDecoration:"none",
        border:"0px",
        fontSize:"3vmax",
    },
    InputStyle:{
        width:"70%",
        height: "10%",
        borderRadius:"60px",
        display:"block",
        marginTop:"7%",
        paddingLeft:"40px",
        paddingRight:"40px",
        outline:"none",
        fontSize:"20px",
        color:"white",
        border:"2px solid white",
        background:"linear-gradient(135deg, #98254C 0%, #4E1130 100%)"
    }

}
    return (
      <div  style={{display:"flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",width:"100%",height:"90%",boxSizing:"border-box",marginTop:"3%"}}>
            <img  style={{margin:"0 auto 0 auto",border:"2px solid white",height:"100px",
            width:"100px",borderRadius:"50px"}} src="https://i.stack.imgur.com/34AD2.jpg" alt="Profile image"/>
          <h3 style={{color:"lightgrey",marginBottom:"0",marginTop:"2%"}}>Edit</h3>
          <Atom.Input InputStyle={styles.InputStyle}    placeholder="Name"/>
          <Atom.Input  InputStyle={styles.InputStyle}  placeholder="Gender"/>
          <Atom.Input  InputStyle={styles.InputStyle}  placeholder="Email"/>
          <Atom.Input  InputStyle={styles.InputStyle}/>
          <Link style={{textDecoration: "none",height: "10%",width: "60%",marginTop:"5%",
          border: "2px solid #FF5A8C",borderRadius: "60px",outline: "none",background: "#FF5A8C"}}to="/sharelink">
          <Atom.Button  ButtonStyle={styles.ButtonStyle}><h3 style={{margin:"0 auto"}}>Next</h3></Atom.Button>
          </Link>
      </div>
    );
}

