import { useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import { PostContext } from '../ContextF/PostContext';


const PostDetail = () => {

 const { posts } = useContext(PostContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return <p>Post not found.</p>;
  }

  const handleNavigation = (direction) => {
    const newId = direction === 'next' ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId },
      });
    }
  };

  return (
    <div className="bg-white shadow-sm rounded m-5 p-5">
      <h2>{post.title}</h2>
      <p  className="my-1">{post.content}</p>
      <button onClick={() => handleNavigation('prev')}
        className="text-center text-white rounded-md py-1 px-2 bg-blue-500 font-medium mr-2"
      >
          Previous</button>
      <button 
      onClick={() => handleNavigation('next')}
      className="text-center text-white rounded-md my-1  py-1 px-2 bg-blue-500 font-medium "
      >
        Next</button>
      {location.state && (
        <p>You navigated here from post ID: {location.state.fromPostId}</p>
      )}
    </div>
)}

export default PostDetail;