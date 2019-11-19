import React from 'react';
import styled from 'styled-components';
function Heart(props) {
 const Heart1=styled.i`
 ${props.HeartStyle}
 `;
  return (
    <Heart1 className="fas fa-heart"></Heart1>
  );
}

export default Heart;
