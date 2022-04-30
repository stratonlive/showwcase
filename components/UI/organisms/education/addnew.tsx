import React from 'react'
import Educationform from '../../molecules/form/educationform' 
import Neweducation from '../../atom/text/education/neweducation'

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