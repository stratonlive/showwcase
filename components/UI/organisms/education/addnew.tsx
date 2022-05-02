import React from 'react'
import Educationform from '@components/UI/molecules/form/educationform' 
import Neweducation from '@components/UI/atom/text/education/neweducation'

function addnew() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <Neweducation />
      <br/>
      <section>
        <Educationform />
      </section>
    </div>
  )
}

export default addnew