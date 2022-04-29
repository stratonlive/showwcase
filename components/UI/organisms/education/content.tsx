import React from 'react'
import Profile from '../../molecules/education/profile'
import History from '../../molecules/education/history'

function content() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between">
        <section className="">
            <Profile />
        </section>
        <section className="flex flex-col flex-wrap items-center justify-center">
            <History />
        </section>

    </div>
  )
}

export default content