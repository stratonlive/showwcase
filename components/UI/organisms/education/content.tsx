import React, { useEffect, useState } from 'react'
import Profile from '../../molecules/education/profile'
import History from '../../molecules/education/history'
import axios from 'axios'

function content() {
  
  const [user, setUser] =useState("");
  const [userdata, setUserdata] =useState("");

  
  useEffect( () => {
    try{
      const getUser = localStorage.getItem("user");
      if(getUser != null){
        setUser(getUser);
      }
      
    }
    catch (e){
      console.log(e);
    }

    const getUser = async (user: string) => {
      const url = "/api/user/" +user;
  
      try{
        let data = await axios.get(url).then((res: { data: any; }) => {
            return res.data;
        })
  
        console.log(data);
        setUserdata(data);
  
        return data;
        }
        catch (e){
            console.log(e);
        }
    }

    getUser(user);
  }, []);

  return (
  <>
    <div className="grid grid-flow-row gap-4 lg:grid-cols-3 sm:grid-cols-1">
    <div className="row-span-2 px-10"><Profile userdata={userdata} /></div>
    <div className="row-span-1 lg:col-span-2 sm:col-span-1 lg:pr-10 sm:px-10">
      <>
        <History userdata={userdata}/>
      </>
    </div>
    {/* <div className="row-span-1 lg:col-span-2 sm:col-span-1 lg:pr-10 sm:px-10"><History /></div> */}
    </div>
  </>

  )
}

export default content