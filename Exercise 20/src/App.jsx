import { TodoApp } from './TodoApp';

const App = () => {
  return (
    <div className='bg-white shadow-2xl py-2 mr-200 mt-5 ml-5 rounded'>
         <h2 className='m-5 text-lg font-semibold'>Todo App with Context and Reducer</h2>
        <TodoApp />
    </div>
  )
}

export default App;