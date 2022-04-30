import React from 'react'
import styled from 'styled-components'

const Button = styled.button `
    display: inline-block;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid white;
    border-radius: 5px;
    display: block;
    :hover{
        display: inline-block;
        color: grey;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid grey;
        border-radius: 5px;
        display: block;
`

function LoginButton({title} : any) {
    return (
        <div className="flex items-center justify-center">
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enter</button>
       
        </div>

        // <Button>{title}</Button>        
    )
}
  
  export default LoginButton