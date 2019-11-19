import React from 'react';
import styled from 'styled-components';

export default function TextBox(props) {
    const TextDiv=styled.div`
    ${props.TextBoxStyle}
    `;
    return (
<TextDiv>{props.children}</TextDiv>
    );
}

