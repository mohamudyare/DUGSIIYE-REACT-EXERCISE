import { createBrowserRouter } from "react-router"
import App from './App'
import Home from "./Pages/Home"
import RecipeDetails from "./Pages/RecipeDetails"
import RecipesList from './Pages/RecipesList'
import Category from "./Pages/Category"
import CategoryRecipes from "./Pages/CategoryRecipes"
import NotFound from "./Pages/NotFound"



const routers = createBrowserRouter([

    {
        path: "/" ,
        element: <App/>,
        errorElement: <NotFound/> ,
        children:[

            {
                index:true ,
                element:<Home/>
            } ,

            {
                path: "recipes" ,
                element: <RecipesList/>
            } ,

            {
                path:'recipes/:id',
                element: <RecipeDetails/>
            } ,

            {
                path:"categories" ,
                element: <Category/> ,
                children: [
                    {
                        path: ":categoryId",
                        element: <CategoryRecipes/>
                    }
                ]
            }
        ]
    }    

])
  


export default routers;