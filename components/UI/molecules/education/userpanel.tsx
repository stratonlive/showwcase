import React from 'react'
import WelcomeText from '../../atom/text/education/welcome'
import AddButton from '../../atom/button/add'

function userpanel() {

  const add = "Add New Education";

  const handleAdd = () => {

  }
  
  return (
    <div>
      <section className="py-1 my-2">
        <WelcomeText />
      </section>
      <br />
      <section className="align-middle text-center">
        <AddButton title={add} onClick={handleAdd}></AddButton>
      </section>
      

    </div>
  )
}

export default userpanel