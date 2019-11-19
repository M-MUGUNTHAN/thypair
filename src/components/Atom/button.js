import React from 'react';
function Button(props) {
    return (
    <button style={props.ButtonStyle}  onClick={props.onClick} type="button">{props.children}</button>
    );
}
export default Button;
