import React from 'react'
import { useRouter } from 'next/router'


function LogoutButton() {

    const router = useRouter();

    function logout(){
        localStorage.clear();
        router.push('/');
    }

    return (
        <div className="flex items-end justify-end p-5">
            
            <button type="submit" onClick={logout} className="bg-white hover:bg-gray-100 text-red-800 font-semibold py-2 px-4 border border-red-400 rounded shadow">Logout</button>
       
        </div>
       
    )
}
  
  export default LogoutButton