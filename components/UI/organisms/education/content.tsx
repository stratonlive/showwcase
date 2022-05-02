import React from 'react'
import Profile from '@components/UI/molecules/education/profile'
import History from '@components/UI/molecules/education/history'


function content({userdata}: any) {
  

  return (
  <>
    <div className="grid grid-flow-row gap-4 lg:grid-cols-3 sm:grid-cols-1">
    <div className="row-span-2 px-10"><Profile userdata={userdata} /></div>
    <div className="row-span-1 lg:col-span-2 sm:col-span-1 lg:pr-10 sm:px-10">
      <>
        <History userdata={userdata}/>
      </>
    </div>
    </div>
  </>

  )
}

export default content