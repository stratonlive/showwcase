import React from 'react'

function history({userdata} : any) {


  return (
    <>

      {userdata.educations ? userdata.educations.map((edu: any, i: any)=>{

      <div className="p-6 w-full max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{edu.schoolname}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{edu.startyear} - {edu.endyear}</p>
      
     <ul>
      <li>
        degree: {edu.degree}
      </li>
      <li>
        major: {edu.major}
      </li>
      <li>
        grade: {edu.grade}
      </li>
     </ul>

     <p>description: {edu.description}</p>
     
      </div>

      }) : "none"}

    </>
  )
}

export default history