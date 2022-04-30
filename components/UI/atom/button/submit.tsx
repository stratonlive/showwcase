import React from 'react'
import styled from 'styled-components'

const Button = styled.button `
    display: inline-block;
    color: green;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid darkgreen;
    border-radius: 5px;
    display: block;
    :hover{
        display: inline-block;
        color: red;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid darkred;
        border-radius: 5px;
        display: block;
    }
`

function submit({title} : any) {
  return (
    <>
        <Button>{title}</Button>
    </>
  )
}

export default submit