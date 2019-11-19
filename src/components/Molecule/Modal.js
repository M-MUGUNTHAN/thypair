 import React from 'react';
 import ModalWidget from 'react-responsive-modal';
import * as Mole from '../Molecule';

 
 export default function Modal(props) {
    
     return (
        <>
        <ModalWidget
        styles={{modal:{margin:"0",position:"absolute",right:"0"}}}
        showCloseIcon={false}
        open={props.open} onClose={props.onCloseModal}>
          <Mole.WidgetShow/>
        </ModalWidget>
      </>
     );
 }
 
