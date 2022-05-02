import React from 'react'
import Loginform from '@components/UI/molecules/form/loginform'
import Welcome from '@components/UI/atom/text/home/welcome'

function loginComponent() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <Welcome />
      <br/>
      <section>
        <Loginform />
      </section>
    </div>
  )
}

export default loginComponent

