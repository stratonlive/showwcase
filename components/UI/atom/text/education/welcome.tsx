import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function welcomeText() {

  const router = useRouter();
  const [user, setUser] =useState("");
  let getUser = null;


  useEffect( () => {
    try{
      getUser = localStorage.getItem("user");
      if(getUser != null){
        setUser(getUser);
      }
      
    }
    catch (e){
      router.push('/');
    }

  });
  

  return (
    <>
        <h1 className="text-xl text-red-500 bold text-center">Welcome {user} to education page.</h1>
    </>
  )
}

export default welcomeText