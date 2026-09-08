import { useContext, useState } from "react"
import { PostContext } from "../ContextF/PostContext"
import { useNavigate } from "react-router";


const CreatePost = () => {

  const {addPosts} = useContext(PostContext);
  
  const[title , setTitle] = useState('');
   const[content , setContent] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    addPosts({title , content});
    navigate('/');
   }



   
  return (

    <div className="bg-white shadow-sm m-5 p-7">
      <h2 className="text-gray-700 font-semibold mb-1">Create a New Post</h2>
      <form onSubmit={handleSubmit}>

        {/* Title */}
        <div>
          <label >
            Title:{''}
            <input 
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             required
             className="border border-gray-700  mb-2 rounded  p-1 text-gray-700 font-semibold"
              />
          </label>
        </div>


          {/* Context */}
         <div>
          <label >
            Context:{''}    
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="border border-gray-700 text-gray-700 font-semibold p-10 mt-2"
              >
              </textarea>
          </label>
        </div>

        <button type="submit" className="bg-blue-500 text-white text-center rounded  py-1 px-50 mt-2">Create Post</button>

      </form>
    </div>
  )
}

export default CreatePost