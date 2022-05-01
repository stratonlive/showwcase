import React from 'react'

function DelButton({title} : any) {

  return (
    <div className="flex items-end justify-end">
        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">{title}</button>
    </div>
  )
}

export default DelButton