

import {useForm} from 'react-hook-form'


const App = () => {

    const {register , handleSubmit , formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log("form submitted :" , data);
          alert('Registration successful!\n' + JSON.stringify(data, null, 2));
    }
  return (

        <div className='min-h-screen bg-linear-to-br from-orange-50 to-rose-50 py-10 px-4'> 

            <div className='max-w-4xl mx-auto flex flex-col justify-center items-center'>

            <div className='bg-rose-50 shadow-xl px-8 py-10 rounded-xl'>

            <h2 className='text-xl font-bold pb-3'>Student Registration</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                  {/* username */}
            <div  className='mb-3'>
                <label className=' font-medium'>Student Name</label> <br />
                <input 
                type="text" 
                placeholder='Enter username'
                className='border-2 rounded-sm pr-30'
                {...register('username' , {required: "username is required" , minLength:{value:4 , message:"Must be at least 4 character"}})}
                />
                {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
            </div>

            {/* Email */}
            <div  className='mb-3'>
                <label className=' font-medium'>Email</label> <br />
                <input 
                type="email" 
                placeholder='Email Address'
                className='border-2 rounded-sm pr-30'
                {...register('email'  , {required:"Email is required" , pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ , message:"Email is invalid"}})}
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>


                {/*Select : Grade level */}
            <div className='mb-3'>
                <label className=' font-medium'>Grade Level</label> <br />
                <select {...register('gradeLevel' , {required:"Please select a grade"})}    className='border-2 rounded-sm pr-49 w-full'>

                        <option className='bg-gray-800 text-white'>Select Grade</option>
                        <option className='bg-gray-800 text-white'>Grade 10</option>
                        <option className='bg-gray-800 text-white'>Grade 11</option>
                        <option className='bg-gray-800 text-white'>Grade 12</option>
                </select>

               {errors.gradeLevel && <p className='text-red-500'>{errors.gradeLevel.message}</p>}
            </div>



            {/* Checkbox */}
            <div  className='mb-3'>
                <label className=' font-medium pb-4'>Subject interst</label>

                <div>
                <input 
                 type="checkbox" 
                 value="mathematics"
                 className='p-4'
                 {...register('checkbox')}
                />
                <label>Mathematics</label>
                </div>


                 <div>
                <input 
                 type="checkbox" 
                 value="Science"
                 {...register('checkbox')}
                />
                <label>Science</label>
                </div>


                 <div>
                <input 
                 type="checkbox" 
                 value="English"
                 {...register('checkbox' , {required:"Select at least one subject"})}
                />
                <label>English</label>
                </div>

                {errors.checkbox && <p className='text-red-500'>{errors.checkbox.message}</p>}

            </div>

                        <button type='submit' className='bg-red-500  text-white text-center px-32 py-1 rounded-sm items-center cursor-pointer'>Register</button>
            </form>

        </div>


        </div>
    </div>
  )
}

export default App;