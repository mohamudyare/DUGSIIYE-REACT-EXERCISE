import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import routers from './router'
import { AuthProvider } from './ContextF/AuthContext'
import PostsProvider from './ContextF/PostContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <AuthProvider>

      <PostsProvider>
            <RouterProvider router={routers}/>
      </PostsProvider>

   </AuthProvider>
   
  </StrictMode> ,
)
