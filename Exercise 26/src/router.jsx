import{ createBrowserRouter } from "react-router";
import CreatePost from "./Component/CreatePost";
import Home from "./Component/Home";
import Login from "./Component/Login";
import App from "./App";
import PostDetail from "./Component/PostDetail";
import ProtectRoute from './Component/ProtectRoute'
import NotFound from "./NotFound";




const routers = createBrowserRouter([


    {
        path:"/",
        element:<App/> ,
        errorElement:<NotFound/> ,
        children:[
            {
                index:true ,
                element:<Home/>
            } ,

             {
                path:"posts/:postId" ,
                element:<PostDetail/> ,
            } ,

            {
                path:"create" ,
                element :(
                    <ProtectRoute> 
                       <CreatePost/>
                    </ProtectRoute>
                )
            } ,

            {
                path:"login" ,
                element:<Login/>
            }
        ]
    }
])


export default routers;