import React from 'react';
import * as Atom from '../Atom';
import QRCode from'qrcode.react';
import {Link} from 'react-router-dom';
export default function QRConnect(props) {
    const styles={
        ButtonStyle:{
        background: "#FF5A8C",
        color:"White",
        width:"50%",
        height:"50px",
        border:"1px solid black",
        borderRadius: "60px",
        display:"block",
        margin:"auto",
        marginTop:"10px",
        outline:"none",
        textDecoration:"none"
    },
};
const shareEvent=()=>{
    if (navigator.share) {
        navigator.share({
          title: 'My awesome post!',
          text: 'This post may or may not contain the answer to the universe',
          url: window.location.href
        }).then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(err => {
          console.log(`Couldn't share because of`, err.message);
        });
      } else {
        console.log('web share not supported');
      }
}
    return (
        <div  style={{display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems: "center",height:"100vh"}}>
            <div>

            <h1>Connet With Partner</h1>
           <p>hjkhkjdhjkbcbjcnbjcbnnncbjbbbbxjbcjc</p>
            </div>
           <div style={{width:"60%",height:"40%",border:"2px solid white",backgroundColor:"white",
           display:"flex",justifyContent:"center",alignItems:"center"}}>
           <QRCode style={{width:"90%",height:"90%"}} value="https:www.google.com"/>
           </div>
           <div style={{width: "100%",marginBottom:"30px"}}>
           <Link style={{textDecoration:"none"}} to="/qrscan">
           <Atom.Button ButtonStyle={styles.ButtonStyle}><h3>Scan QR</h3></Atom.Button>
           </Link>
           <Atom.Button onClick={shareEvent} ButtonStyle={{...styles.ButtonStyle,backgroundColor:"white",color:"#E0115F"}}><h3>Share</h3></Atom.Button>
           </div>
        </div>

    );
}
