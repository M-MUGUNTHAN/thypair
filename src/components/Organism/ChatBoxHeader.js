import React,{useState} from 'react';
import * as Atom from '../Atom';
import * as Mole from '../Molecule';



export default function ChatBoxHeader(props) {
    const [open,setOpen]=useState(false);
    const onOpenModal=() => {
       setOpen(true);
     };
     const onCloseModal = () => {
       setOpen(false);
     };
    return (
       <div style={{display:"flex",justifyContent:"space-between",width:"100%",backgroundColor:"white"}}>
           <i style={{marginLeft:"10px",marginTop:"10px"}} class="fas fa-chevron-left fa-2x"></i>
           <Atom.WidgetButton onClick={onOpenModal} WidgetButtonStyle={{marginRight:"10px",marginTop:"2px"}}/>
           <Mole.Modal open={open} onCloseModal={onCloseModal} onOpenModal={onOpenModal}/>      
       </div>
    );
}
