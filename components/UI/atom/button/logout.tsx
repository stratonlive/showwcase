import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Button = styled.button `
    display: inline-block;
    color: red;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
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

function LogoutButton() {

    const router = useRouter();

    function logout(){
        localStorage.clear();
        router.push('/');
    }

    return (
        <div className="flex items-end justify-end p-5">
            
            <button type="submit" onClick={logout} className="bg-white hover:bg-gray-100 text-red-800 font-semibold py-2 px-4 border border-red-400 rounded shadow">Logout</button>
       
        </div>

        // <Button onClick={logout}>Logout</Button>        
    )
}
  
  export default LogoutButton