import React from 'react';
import * as Atom from '../Atom';


export default function ChatBoxBody(props) {
    const styles={
        SenderStyle:{
            backgroundColor:"White",
            height:"50px",
            width:"200px",
            border:"2px solid",
            marginBottom:"10px",
            marginTop:"10px",
            borderRadius:"60px"
        },
        ReceiverStyle:{
            backgroundColor:"White",
            height:"50px",
            width:"200px",
            border:"2px solid",
            marginBottom:"10px",
            marginTop:"10px",
            borderRadius:"60px"
        },
        TextBoxStyle:{
            display:"flex",
            justifyContent:"flex-start"
        }
    };
    return (
        <div style={{width:"100%",height:"80vh",border:"2px solid"}}>
        <Atom.TextBox TextBoxStyle={styles.TextBoxStyle}>
            <Atom.TextBox TextBoxStyle={styles.SenderStyle}>some text</Atom.TextBox>
        </Atom.TextBox>   
        <Atom.TextBox TextBoxStyle={{...styles.TextBoxStyle,justifyContent:"flex-end"}}>
            <Atom.TextBox TextBoxStyle={styles.ReceiverStyle}>some text</Atom.TextBox>
        </Atom.TextBox>
        </div>
    );
}

