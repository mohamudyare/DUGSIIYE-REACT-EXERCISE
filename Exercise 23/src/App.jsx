

import React,{useState} from 'react'

const App = () => {


  const [formData , setFormData] = useState({

    username : "" ,
    email: "" ,
    role : "" ,
    exprience : "" ,
    skills: [],
    agreeToTerms: false,
    notifications: false
  })

  const [errors , setErrors] = useState({});


  
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager"
  ];


   const skillOptions = [
    "React", "JavaScript", "TypeScript", "Node.js",
    "Python", "Java", "UI Design", "API Development"
  ];


  const validateField = (name, value) => {
    let error = "";
    
    if (name === 'fullName') {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
        error = "Please enter a valid name (2-30 characters, letters only)";
      }
    }
    
    if (name === 'email') {
      if (!value) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    }
    
    if (name === 'role') {
      if (!value) {
        error = "Please select a role";
      }
    }
    
    if (name === 'experience') {
      if (!value) {
        error = "Experience is required";
      } else if (isNaN(value) || value < 0 || value > 50) {
        error = "Please enter valid years of experience (0-50)";
      }
    }
    
    if (name === 'skills') {
      if (!value || value.length === 0) {
        error = "Please select at least one skill";
      }
    }
    
    if (name === 'agreeToTerms') {
      if (!value) {
        error = "You must agree to the terms";
      }
    }
    
    return error;
  };

  

  const handleSkill = (skill) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill];
    
    setFormData(prev => ({
      ...prev,
      skills: newSkills
    }));

    
    const error = validateField('skills', newSkills);
    setErrors(prev => ({
      ...prev,
      skills: error
    }));
  };




  const handleSubmit = (event) => {

      event.preventDefault();

       const formErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

      if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(formErrors);
    }

     
  }



  const handleChange = (e) => {

      const {name , value , type , checked} = e.target

      const newValue = type === "checkbox" ? checked : value;
      setFormData((prevData) => ({...prevData , [name] : newValue}))

      const error = validateField(name , newValue);
      setErrors((prev) => ({...prev , [name] : error}))


  }

  return (

    <div className='min-h-screen bg-blue-50  pt-4 px-4'>

    <div className='max-w-4xl mx-auto bg-white shadow-xl rounded-2xl ml-120 mr-120 px-4 py-3 ring-zin c-900/5'>

          <h2 className='text-center text-xl font-semibold'>Developer Application Form</h2>

          <form onSubmit={handleSubmit} className='mt-4 ml-4' >

            <div>
            {/* Username */}
            <label className='text-sm font-medium'>Full name</label> <br/>
            <input 
               type="text" 
                className={`mt-1 block w-full rounded-lg border ${
                errors.fullName
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
               name='username'
               value={formData.username}
               onChange={handleChange}
              /> 
              {errors.fullName && (
              <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
            )}
             </div>

            <div>
              {/* Email */}
              <label className='text-sm font-medium'>Email</label> <br/>
            <input 
               type="text" 
                className={`mt-1 block w-full rounded-lg border ${
                errors.email
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
               name='email'
               value={formData.email}
               onChange={handleChange}
              /> 
                  {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
              </div>

              <div>
            {/* Select Role */}
              <label className='text-sm font-medium my-3'>Role</label> <br />
              <select name="role" value={formData.role} onChange={handleChange}
               className={`mt-1 block w-full rounded-lg border ${
                errors.role
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}>
              
                <option value="" className=' bg-cyan-950 text-white'>Select roles</option>
                {
                  roles.map(role => (
                    <option key={role} value={role} className=' bg-cyan-950 text-white'>{role}</option>
                  ))
                }
                
              </select> 
                   {errors.role && (
              <p className="mt-2 text-sm text-red-600">{errors.role}</p>
            )}
              </div>

              <div>

              {/* year of Exprience */}
                <label className='text-sm font-medium '>Year of Exprience</label> <br />
              <input 
                type="number" 
                className={`mt-1 block w-full rounded-lg border ${
                errors.experience
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
                name='exprience'
                value={formData.year}
                onChange={handleChange}
                /> 
                 {errors.experience && (
              <p className="mt-2 text-sm text-red-600">{errors.experience}</p>
            )}
                </div>


              <div>

              {/* Skill */}
              <div>
                <label  className='text-sm font-medium '>
              Skills
            </label>
            <div className='grid grid-cols-2'>
                {
                  skillOptions.map(skill => (
                    <label key={skill} className="flex items-center space-x-2" >

                      <input 
                        type="checkbox"
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleSkill(skill)}
                         className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                         />
                         <span  className="text-sm text-zinc-600 mb-2" >{skill}</span>
                    </label>
                  ))
                }
                </div>
              </div>

                     {errors.skills && (
              <p className="mt-2 text-sm text-red-600">{errors.skills}</p>
            )}
              </div>
           


              <div>
                {/* Agree Terms */}
                <input 
                        type="checkbox" 
                        name='agreeToTerms'
                        value={FormData.agreeToTerms}
                        onChange={handleChange}
                                     className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                /> 
                <label className="text-sm text-zinc-700">I agree to the terms and condition</label>
                </div>


              <div>
                  {/* Receive Notification */}
                <input 
                        type="checkbox" 
                        name='notifications'
                        value={FormData.notifications}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
               /> 
               <label className="text-sm text-zinc-700">Receive notification about new apportunities</label>
              
            </div>

              <button type='submit' className='bg-rose-700 text-white text-center rounded-xl px-26 items-center py-1 mt-2 cursor-pointer border-rose-200 border-2'>Submit Application</button>

          </form>

    </div>

    </div>
  )
}

export default App;