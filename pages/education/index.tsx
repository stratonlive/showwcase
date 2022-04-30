import { InferGetServerSidePropsType } from 'next'
import React, { useEffect } from 'react'
import Content from '../../components/UI/organisms/education/content'
import Userpanel from '../../components/UI/organisms/education/userpanel'
import { PrismaClient } from '@prisma/client'


function Education() {
  


  useEffect(() => {
      

    });
  
  return (
    <div>
        <Userpanel />
        <br />
        <section>
            <Content />
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