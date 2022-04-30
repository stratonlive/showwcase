import React from 'react'
import WelcomeText from '../../atom/text/education/welcome'
import Educationmodal from '../../molecules/education/educationmodal'
import Modal from 'react-modal';


function userpanel() {

  const add = "Add New Education";
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  
  return (
    <div>
      <section className="py-1 my-2">
        <WelcomeText />
      </section>
      <br />
      <section className="align-middle text-center">
        {/* <AddButton title={add} onClick={handleAdd}></AddButton> */}
        <button type="button" onClick={openModal} className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full md:w-auto sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">{add}</button>
      </section>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Education Modal"
          >
            
            <Educationmodal />
          </Modal>
      

    </div>
  )
}

export default userpanel