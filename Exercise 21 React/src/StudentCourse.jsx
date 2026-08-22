



const StudentCourse = () => {



    const Schedules = [
      {
        id:1,
        text:"Average Grade" ,
        number: "88%" ,
        image: "📊"
      } ,

       {
        id:2,
        text:"Courses" ,
        number: "3" ,
        image: "📚"
      } ,

       {
        id:3,
        text:"Study Hours" ,
        number: "45h" ,
        image: "⏰"
      } ,

       {
        id:4,
        text:"Assigments" ,
        number: "12" ,
        image: "✍️"
      } ,
    ]


    const CourseProgress = [

      {
        id:1 ,
        Language: "React Fundamental" ,
        Average: "75%" ,
        background:"b" ,
        Next: "Next: Components & Props" ,
        Name:"maxamed faarax"

      } ,

       {
        id:2 ,
        Language: "javaScript Advanced" ,
        Average: "45%" ,
         background:"b" ,
        Next: "Next: Asyn/Await" ,
        Name:"Caisho Jaamac"
      } ,

        {
        id:3 ,
        Language: "UI/UX Design" ,
        Average: "90%" ,
         background:"b" ,
        Next: "Next: Color Theory" ,
        Name:"Salax Cubeyd"
      }
    ]



    const Assigment = [
      {
        id:1 ,
        Title:"Build a Todo App" ,
        Language: "React Fundamentals" ,
       Status:"pending" ,
        Date:"Due-2024-03-20"
      } ,

        {
          id:2,
         Title:"ApI Integration" ,
        Language: "JavaScript Advanced" ,
         Status:"completed" ,
        Date:"Due-2024-03-18"
      } ,

        {
          id:3 ,
         Title:"Design System" ,
        Language: "UI/UX Design" ,
        Status:"In-progress" ,
        Date:"Due-2024-03-25"
      }
    ]


    const StatusStyle = (status) => {
      switch(status) {

            case "pending" :
                return "bg-red-100 text-red-700"

            case "completed" :
                  return "bg-green-100 text-green-700"   

            case "In-progress"   :
                return "bg-yellow-100 text-yellow-700"   

             default :
                return "bg-gray-100 text-gray-600"   
      }
    }


    const Announcements = [

       {
          id:1 ,
          title:"New Course Available" ,
          update: "Check out Our new TypeScript course!" ,
          time: "2 hours ago" ,
       } ,

       {
          id:2 ,
          title:"Maintenance Notice" ,
          update: "Platform updates scheduled for to night" ,
          time: "5 hours ago" ,
       } 

    ]

  return (

    // Waa div-ka guud 
    <div className='bg-mist-50 min-h-screen py-8 px-8 '>
        <div className=' mx-4xl mx-auto'>
              

              {/* 1) Header */}
              <div className='bg-white shadow-sm rounded-xl flex justify-between items-center px-3 py-4 overflow-hidden mb-8'>
                      {/* Header text */}
                  <div>
                      <h1 className='text-3xl font-bold'>Welcome back,  Student!</h1>
                      <p  className='text-gray-500'>Here's what's happening with your courses today.</p>
                  </div>

                     {/* Header image */}
                  <div className='flex gap-2'>
                        <span>🔔</span>
                        <span className='bg-linear-to-l from-rose-500 to-orange-400 text-white text-center px-3 py-1  mt-1 text-sm rounded-full'>S</span>
                  </div>
              </div>



              {/*  2) Schedule page */}
              <div className='flex  flex-wrap justify-between mr-2'>
                {
                  Schedules.map( Schedule => (
                    <div className='bg-white shadow-sm py-7 pl-4 pr-40 rounded-xl overflow-hidden flex'>
                      <div className='text-xl pr-3 pt-2'>{Schedule.image}</div>
                      <div>
                        <p className='text-sm text-gray-500 '>{Schedule.text}</p>
                        <p className='text-2xl font-bold'>{Schedule.number}</p>
                      </div>
                    </div>
                  ))
                }
              </div>



                  {/* 4) Courses progress and Assigment */}
                <div className='flex gap-9 mt-6'>


                     {/* Courses */}
                <div className='bg-white shadow-sm py-3 px-3 mr-2 rounded-xl'> 

                    {/* Course Text */}
                  <div>
                        <h3 className='text-3xl font-bold  py-4 px-3'>Course Progress</h3>
                  </div>

                    {/* course language */}
                  <div>
                  
                    {CourseProgress.map(progress => (
                      <div className='bg-gray-50 py-4 px-3 rounded-xl shadow-sm mb-10 '>

                       <div className='flex justify-between items-center' >
                            <div className='mr-180  items-center font-semibold text-2xl'>{progress.Language}</div> 
                            <div className='text-xl text-gray-600'>{progress.Average}</div>
                       </div>

                     <div className='bg-gray-300 text-gray-300 my-2 rounded-full'>{progress.background}</div>

                       <div className='flex justify-between'>
                            <div className='text-xl text-gray-600'>{progress.Next}</div>
                            <div className='text-xl text-gray-600'>{progress.Name}</div>
                       </div>

                      </div>
                    ))}
                  
                  </div>

              </div>
                     

      

                       {/* slides Assigment */}
                    <div>

                          {/* slide 1 */}
                         <div className='bg-white shadow-sm mb-4 rounded-xl pb-'>
                              <h1 className='text-2xl font-bold p-4'>Upcoming Assigment</h1>
                                {
                                  Assigment.map(asigment => (
                                      <div className='flex justify-between px-7 py-3'>
                                          {/* part 1 */}
                                        <div>
                                          <h1 className='text-xl font-semibold'>{asigment.Title}</h1>
                                          <p className='text-gray-500'>{asigment.Language}</p>
                                        </div>

                                        <div>
                                          <p className={`mb-1 rounded-full text-center ${StatusStyle(asigment.Status)}`}>{asigment.Status}</p>
                                          <p className="text-gray-500 text-sm">{asigment.Date}</p>
                                        </div>

                                      </div>        
                                  ))
                                }
                          </div>


                                {/* slide 2 */}
                         <div className='bg-white shadow-sm pr-70 rounded-xl '>

                                  <h1 className="text-2xl font-semibold px-6 pt-6">Announcement</h1>
                                {
                                  Announcements.map(anouncement => (
                                    <di className='flex gap-4 p-6'>

                                      <div className="bg-blue-800 text-blue-800 mb-2 pb-8">b</div>

                                      <div>
                                            <p className="text-xl font-medium">{anouncement.title}</p>
                                            <p className=" text-gray-700">{anouncement.update}</p>
                                            <p className="text-sm text-gray-500"> {anouncement.time}</p>
                                      </div> 
                                       
                                    </di>
                                  ))
                                }

                          </div>
                          
                    </div>    


                </div>
                



        </div>
    </div>
  )
}

export default StudentCourse;