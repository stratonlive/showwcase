import React from 'react'
import styled from 'styled-components'

const Button = styled.button `
    display: inline-block;
    color: blue;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid darkblue
    border-radius: 5px;
    display: block;
    :hover{
        display: inline-block;
        color: purple;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid darkpurple;
        border-radius: 5px;
        display: block;
}
`

function AddButton({title} : any) {
  return (
    <div>
        <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">{title}</button>
    </div>
  )
}

export default AddButton