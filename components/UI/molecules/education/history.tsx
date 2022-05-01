import React, { useCallback, useEffect, useState } from 'react'
import { educationDelete } from '../../../functional/education/service/educationService';
import { EduSkeletonCard } from '../../atom/skeleton/education';

function history({userdata} : any) {

  const educations = userdata.educations;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (educations) {
      setLoading(false);
    }
  }, [educations]);

  const Deleting = useCallback(
    (id: any) => async () => {
      try{
        await educationDelete(id);
        alert("Successfully Deleted")
        window.location.reload();
      }
      catch (e){
        console.log(e);
      }

    },
    [],
  )


  return (
    <>
      {loading ? <EduSkeletonCard />
      :
      <>
      {educations ? educations.map((item :any) => (
        <div key={item.id}>
          <div className="p-6 w-full max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.schoolname}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.startyear} - {item.endyear}</p>
            
            <ul>
              <li>
                degree: {item.degree}
              </li>
              <li>
                major: {item.major}
              </li>
              <li>
                grade: {item.grade}
              </li>
            </ul>

            <p>description: {item.description}</p>

            <div className="flex items-end justify-end">
              <button type="button" onClick={Deleting(item.id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
          </div>
        
          </div><br />
        </div>
      )) : "none" }
      </>
      }       
    </>
  )
}

export default history