import React from 'react'
import styled from 'styled-components';

const TitleWelcome = styled.h1`
    font-size: 2em;
    text-align:center;
    color: white;
    style: bold;
`

function welcome() {

  return (
    <div>
        <TitleWelcome>Hi There! Welcome to your education showcase</TitleWelcome>
    </div>
  )
}

export default welcome