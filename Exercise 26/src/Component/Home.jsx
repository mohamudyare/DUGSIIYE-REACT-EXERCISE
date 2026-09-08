import  { useContext } from 'react'
import { PostContext } from '../ContextF/PostContext'
import { Link, useLocation } from 'react-router';

const Home = () => {

  const {posts} = useContext(PostContext);
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const SearchTerm = query.get('search') || "";

  const FilteredPost = posts.filter((post) => post.title.toLowerCase().includes(SearchTerm.toLowerCase()))

  return (
    <div className='bg-white shadow-sm mt-4 p-4 rounded'>
      <h2 className='text-gray-700 font-medium mb-1'>Blog Post</h2>

      <form >
              <input 
                type="text" 
                name="search"
                placeholder='Search Post'
                defaultValue={SearchTerm}
                className='rounded px-43 py-1 mb-3 text-gray-500 border border-solid border-gray-700'
                /> <br />
                <button type='submit' className='bg-blue-500 text-white px-60 rounded-sm py-1 mb-1'>Search</button>
      </form>

      <ul>
          {FilteredPost.map((post) => (
            <li key={post.id}  className={({isActive}) => (isActive ? "hover:underline" : undefined)}>
                <Link 
                 to={`/posts/${post.id}`}
                className='text-blue-500 font-semibold mx-2'
                 >
                  {post.title} </Link>
            </li>
          ))}
      </ul>

    </div>
  )
}

export default Home;