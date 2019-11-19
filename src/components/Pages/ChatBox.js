import React from 'react';
import * as Organ from '../Organism';
import * as Mole from '../Molecule';


export default function ChatBox(props) {
    return (
        <div style={{display:"flex",flexDirection:"column",margin:"0"}}>
       <Organ.ChatBoxHeader/>
       <Mole.ChatBoxBody/>
       <Organ.ChatBoxFooter/>
       </div>
    );
}

