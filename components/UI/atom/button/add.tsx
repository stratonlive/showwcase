import React from 'react'


function AddButton({title} : any) {
  return (
    <>
        <button type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">{title}</button>
    </>
  )
}

export default AddButton