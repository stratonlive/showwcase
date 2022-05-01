import React from 'react'

function header() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
          <a className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
              <img className="mr-2" src="/logo/showwcase.png" 
              height= "50px" width="50px"
              alt="" loading="lazy" />
              <span className="font-medium">Showwcase</span>
          </a>
          </div>
          <div className="">
            <div className="flex flex-wrap items-right justify-right">
              <div className="w-6/12 sm:w-4/12 px-4">
                <img src="/images/avatar.jpg" alt="..." className="shadow rounded-full max-w-[3rem] h-[3rem] align-middle border-none" />
              </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default header