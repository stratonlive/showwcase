import { InferGetServerSidePropsType } from 'next'
import React, { useEffect, useState } from 'react'
import Content from '../../components/UI/organisms/education/content'
import Userpanel from '../../components/UI/organisms/education/userpanel'
import axios from 'axios'
import { useRouter } from 'next/router'
import User from '../../components/types/user'


function Education() {
  
  const router = useRouter();
  const [user, setUser] =useState("");
  const [userdata, setUserdata] =useState({});
  let getUser = null;


  useEffect( () => {
    try{
      getUser = localStorage.getItem("user");
      if(getUser != null){
        setUser(getUser);
      }
      else{
        router.push('/');
      }
      
    }
    catch (e){
      console.log(e);
      router.push('/');
    }

    if(user){
      fetchUser(user);
    }
    
  }, [user]);

  

  const fetchUser = async (user: string) => {
    const url = "/api/user/" +user;

    try{
      let data = await axios.get(url).then((res: { data: User; }) => {
          return res.data;
      })

      setUserdata(data);

      return data;
      }
      catch (e){
          
      }
  }

  
  return (
    <div>
        <Userpanel userdata={userdata}/>
        <br />
        <section>
            <Content userdata={userdata}/>
        </section>

        <div id="main" className="main">

        </div>
        
    </div>
  )
}

// export async function getServerSideProps(ctx: any) {

//   const education = await prisma.user.findMany({
//     where: {
//       name: "dana",
//     },
//     include: {
//       educations: true,
//     },
//   });

//   return {
//     props: {education}, // will be passed to the page component as props
//   }
// }

export default Education