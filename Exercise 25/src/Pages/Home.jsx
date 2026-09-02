import { Link } from "react-router"



const Home = () => {



  return (
    <div className='text-center items-center pt-5 '>
      
      <div className="pb-6">
      <h1 className='font-bold text-gray-800 text-3xl'>Welcome to Recipe Book</h1>
      <p className='text-gray-500 pt-4 '>Diccover delicious recipes and start cooking today!</p>
      </div>

      

    <div className="flex justify-center items-center text-center gap-4 ">
       
        {/* Recipes */}
        <div>
          <Link to="/recipes">
            <div className='bg-rose-600 text-white  rounded-md py-5 px-8 text-sm text-center hover:bg-rose-700'>
              <p className="text-xl font-bold">Browse Recipes</p>
              <p className="text-sm text-gray-200 pt-2">Explore our collection of delicious <br /> recipes</p>
             </div>
          </Link>
         </div>

       {/* Category */}
      <div>
            <Link to="/categories" >
                <div className='bg-rose-600 text-white  rounded-md px-10 pt-5 pb-10 text-sm text-center hover:bg-rose-700'>
                     <p className="text-xl font-bold">Recipe Categories</p>
                    <p className="text-sm text-gray-200 pt-2">Find recipes by category </p>
              </div>
          </Link>
      </div>

      
          
       </div>   

    </div>
  )
}

export default Home