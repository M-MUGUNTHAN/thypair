import React from 'react';
import {Link} from 'react-router-dom';
import * as Atom from '../Atom';

export default function QRScan(props) {
    const styles={
        ButtonStyle:{borderRadius:"50px",
        height:"50px",
        width:"50px",
        marginTop:"20px",
        outline:"none"
    },
    };
    return (
       <div>
           <h1>Scan the QR Code</h1>
           <p>hgsdfhhjcnjsncjndbbcncsjnsj</p>
           <div style={{margin:"auto",border:"2px solid black",height:"200px",width:"200px",backgroundColor:"white"}}>
           <i class="fas fa-camera fa-10x"></i>
           </div>
            <Link style={{textDecoration:"none"}} to="/three">
                <Atom.Button ButtonStyle={styles.ButtonStyle}><i class="fas fa-chevron-left fa-2x"></i></Atom.Button>
           </Link>
       </div>
    );
}
