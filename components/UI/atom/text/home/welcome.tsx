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
    <>
        {/* <TitleWelcome>Hi There! Welcome to your education showcase</TitleWelcome> */}
        <h1 className="text-xl text-white bold text-center">Hi There! Welcome to your education showcase</h1>
    </>
  )
}

export default welcome