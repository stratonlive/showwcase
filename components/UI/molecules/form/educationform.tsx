import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import schoollist from '../../../functional/education/service/schoolService';
import Submit from '../../atom/button/submit';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Education from '../../../types/education';
import {educationCreate} from '../../../functional/education/service/educationService'


const filter = createFilterOptions();

function educationform() {

    const saveEducation = "Save";
    const [schools, setSchools] =useState([]);
    const getUserId = sessionStorage.getItem("userId");

    const { register, handleSubmit, formState } = useForm<Education>();
    const { errors } = formState;

    const onSubmit = handleSubmit(async (data: Education) => {

        const creatinguser = await educationCreate(data);

        if (creatinguser != null){
          window.location.reload();
        }

    })

    const searchSchool = async (e: any) => {
      let data = await schoollist(e.target.value);
        setSchools(data);
    }


  return (
    <>
        <form onSubmit={onSubmit}>

        <input type="hidden" {...register('authorId', {required: true})} name="authorId" id="authorId"  value={getUserId ? getUserId : ""}/>
          
          <div className="relative z-0 w-full mb-6 group">
          <Autocomplete
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={schools ? schools.map((obj: any) => obj.name) : []}
            renderOption={(props, option) => <li {...props}>{option}</li>}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="School Name" {...register('schoolname', {required: true})} onChange={(e) => searchSchool(e)}/>
            )}
          />
          {errors.schoolname && <span className="text-sm text-red-600">Enter Your School Name</span>}
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <input type="text" {...register('degree', {required: true})} name="degree" id="degree" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="degree" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Degree</label>
          {errors.degree && <span className="text-sm text-red-600">Enter Your Degree</span>}
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <input type="text" {...register('major', {required: true})} name="major" id="major" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="major" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Major</label>
          {errors.major && <span className="text-sm text-red-600">Enter Your Major</span>}
          </div>
            <div className="relative z-0 w-full mb-6 group">
            <input type="number" {...register('startyear', {required: true})} id="startyear" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="startyear" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Year</label>
            {errors.startyear && <span className="text-sm text-red-600">Enter Your Start Year</span>}
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <input type="number" {...register('endyear' , {required: true})} id="endyear" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="endyear" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Year</label>
            {errors.endyear && <span className="text-sm text-red-600">Enter Your End Year</span>}
            </div>
          <div className="relative z-0 w-full mb-6 group">
          <input type="text" {...register('grade', {required: true})} name="grade" id="grade" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="grade" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Grade</label>
          {errors.grade && <span className="text-sm text-red-600">Enter Your Grade</span>}
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <input type="textarea" {...register('description', {required: true})} name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
          {errors.description && <span className="text-sm text-red-600">Enter Your Description</span>}
          </div>
          
        <div className="flex items-end justify-end">
            <Submit title={saveEducation} />
        </div>    
        
        </form>

    </>
  )
}

export default educationform