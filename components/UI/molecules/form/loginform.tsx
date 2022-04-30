import React from 'react'
import { useForm } from 'react-hook-form'
import {userCreate} from '../../../functional/login/service/userService'
import LoginButton from '../../atom/button/login'
import Name from '../../atom/text/home/name'
import User from '../../../types/user'
import { useRouter } from 'next/router'

function loginform() {

  const router = useRouter();
  const loginbutton = "Enter";
    const { register, handleSubmit, reset, formState } = useForm<User>();
    const { errors } = formState;

    const onSubmit = handleSubmit(async (data: User) => {

        const creatinguser = await userCreate(data);

        if (creatinguser != null){
          const setUser = localStorage.setItem("user", data.name);
          router.push({
            pathname: '/education',
            query: { name: data.name }
        }, '/education');
        }
    })

  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
        <br />
        <Name />
        <br />
        <form onSubmit={onSubmit}>
          <div className="relative z-0 w-full mb-6 group">
          <input type="text" {...register('name', {required: true})} name="name" id="name" className="block py-2.5 px-0 w-half text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
          {errors.name && <span className="text-sm text-red-600">Enter Your Name</span>}
          </div>
        
        <LoginButton title={loginbutton}/>
        
        </form>

    </div>
  )
}

export default loginform