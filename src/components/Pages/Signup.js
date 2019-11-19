import React,{useState} from 'react';
import * as Atom from '../Atom';
import {Link} from 'react-router-dom';
function Signup() {
const styles = {
    HeartStyle:{
        color:"#FF5A8C",
        fontSize:"6rem"
    },
    ButtonStyle:{
        background: "#FF5A8C",
        width:"60%",
        height:"60px",
        border:"1px solid black",
        borderRadius: "60px",
        display:"block",
        margin:"auto",
        marginTop:"10px",
        outline:"none",
        color:"white",
        textDecoration:"none",
    }
}
const InputStyle={
    boxSizing:"border-box",
    width:"90%",
    height: "70px",
    border:"1px solid black",
    borderRadius:"60px",
    display:"block",
    margin:"auto",
    paddingLeft:"16%",
    paddingRight:"16%",
    outline:"none",
    fontSize:"x-large",
}
const[inputstyle,setStyle]=useState(InputStyle);
const[inputval,setinputval]=useState();
const[divflexstyle,setdivflex]=useState({});
const inputFocus=()=>{
        setStyle({...inputstyle,background:"linear-gradient(135deg, #98254C 0%, #4E1130 100%)",border:"2px solid white"});
        setdivflex({display:"flex",alignItems:"center",justifyContent:"center"});
    }




    return (
        <div style={{color:"white",height:"100vh",display:"flex",flexDirection:"column",
        justifyContent:"space-evenly",alignItems:"center",margin:"0 10px"}}>
        <div style={divflexstyle}>
        <div >
        <Atom.Heart HeartStyle={styles.HeartStyle}/>
        </div>
        <div>
        <h1>lorem ipsum</h1>
        <p>TO ROUTE MANUALLY START WITH /one</p>
        </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",width:"100%",height:"max-content"}}>
        <Atom.Input InputStyle={inputstyle}  onFocus={inputFocus} onChange={(e)=>setinputval(e.target.value)}
         value={inputval} placeholder="Mobile Number" type="number"/>
        <Link style={{width:"inherit",textDecoration:"none",marginTop:"15px"}} to="/otp">
        <Atom.Button ButtonStyle={styles.ButtonStyle}><h4>OTP</h4></Atom.Button>
        </Link>
        </div>
       
        </div>
    );
}
export default Signup;