import React, { useEffect, useState } from 'react'
import { ProfileSkeletonCard } from '../../atom/skeleton/profile';

function profile({userdata} : any) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userdata) {
      setLoading(false);
    }
  }, [userdata]);
  
  return (
    <>
      {loading ? <ProfileSkeletonCard />
      :
      <div className="w-full max-w-xs sm:w-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

      <div className="flex flex-col items-center pb-10">
      <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="/images/avatar.jpg" alt="Avatar image" />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userdata.name}</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">{userdata.educations ? userdata.educations.degree : null}</span>
      <div className="flex mt-4 space-x-3 lg:mt-6 px-3">
        <ul>
          <li>Name : {userdata.name}</li>
          <li>Email : {userdata.email}</li>
          <li>School : {userdata.educations ? userdata.educations.schoolname : null}</li>
        </ul>
      </div>
      </div>
      </div>
      }

    </>
    
  )
}

export default profile