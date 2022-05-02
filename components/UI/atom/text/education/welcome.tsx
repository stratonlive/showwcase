import React from 'react'

function welcomeText({userdata}: any) {
  
  return (
    <>
    {userdata ?
        <h1 className="text-xl text-red-500 bold text-center">Welcome {userdata.name} to education page.</h1>
    :   <h1 className="text-xl text-red-500 bold text-center">Welcome to education page.</h1>}
    </>
  )
}

export default welcomeText