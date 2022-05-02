import { AnySoaRecord } from 'dns'
import React from 'react'
import Neweducation from '@components/UI/atom/text/education/neweducation'
import Educationform from '../form/educationform'

function educationmodal({userdata}: any) {
  return (
    <div className="relative p-2 w-full h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative p-4 w-full h-full md:h-auto">
            <div className="py-6 px-6 lg:px-8">
                
                  <Neweducation />
  
            </div>

            <Educationform userdata={userdata}/>
        </div>
    </div>
  )
}

export default educationmodal