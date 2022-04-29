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
    <div>
        <TitleName>Type your name and click "Enter" below to begin!</TitleName>
    </div>
  )
}

export default name