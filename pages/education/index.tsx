import { InferGetServerSidePropsType } from 'next'
import React, { useEffect, useState } from 'react'
import Content from '@components/UI/organisms/education/content'
import Userpanel from '@components/UI/organisms/education/userpanel'
import { useRouter } from 'next/router'
import Meta from '@components/UI/atom/meta/meta'
import { SSRuserFetching, userFetching } from '@components/functional/education/service/userDataService'


function Education({ datafetch }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  const router = useRouter();
  const [user, setUser] =useState("");
  const [userdata, setUserdata] =useState(datafetch);
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
    }

    if(user && Object.keys(datafetch).length === 0){
      fetchUser(user);
    }

  }, [user]);

  

  const fetchUser = async (user: string) => {

    try{

      let data = await userFetching(user);

      setUserdata(data);

      return data;
      }
      catch (e){
          
      }
  }

  
  return (
    <>
    <Meta 
    title="Education" 
    keywords="Web Application, Showwcase profile, Showwcase education, Where developer meets, software community"
    description="Web Application for developers community profile education" />
    
        <Userpanel userdata={userdata}/>
        <br />
        <section>
            <Content userdata={userdata}/>
        </section>
        
    </>
  )
}

export async function getServerSideProps(ctx: any) {

  let datafetch = {};

  if(ctx.query !== null){
    const username = ctx.query.name;

    const data = await SSRuserFetching(username);

    datafetch = data;

  }

  return {
    props: {datafetch}, // will be passed to the page component as props
  }
}

export default Education