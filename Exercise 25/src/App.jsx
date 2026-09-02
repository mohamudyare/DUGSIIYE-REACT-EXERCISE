
import { NavLink, Outlet } from 'react-router';

const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-around gap-30 items-center bg-white shadow-md p-3 '>
            <h2 className='font-bold  text-rose-700 text-xl'>Recipe Book</h2>
            <nav className='space-x-7  text-gray-800'>
                <NavLink 
                  to="/" 
                  className={({isActive}) => (isActive ? "text-rose-600 font-medium" : undefined) }
                >
                    Home
                </NavLink>

                 <NavLink 
                  to="/recipes" 
                      className={({isActive}) => (isActive ? "text-rose-600 font-medium" : undefined) }
                >
                    Recipes
                </NavLink>


                 <NavLink 
                  to="/categories" 
                //    className=" hover:text-rose-600 font-normal text-sm text-gray-800" 
                      className={({isActive}) => (isActive ? "text-rose-600 font-medium" : undefined) }
                >
                    Categories
                </NavLink>



            </nav>
        </div>


          <main>
              <Outlet/>
        </main>
      
    </div>
  )
}

export default App;