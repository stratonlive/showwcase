import React from 'react'
import styled from 'styled-components';

const TitleName = styled.h4`
    font-size: 1em;
    text-align:center;
    color: white;
    style: bold;
`

function name() {

  return (
    <>
        {/* <TitleName>Type your name and click "Enter" below to begin!</TitleName> */}
        <h1 className="text-xl text-white bold text-center">Type your name and click "Enter" below to begin!</h1>
    </>
  )
}

export default name