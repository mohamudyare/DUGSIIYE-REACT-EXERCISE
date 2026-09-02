import { useRouteError } from "react-router"



const NotFound = () => {

  const error = useRouteError();

  console.log(error)
  return (
    <div>
      <h1>Error</h1>
      <p>{error.status.Text}</p>
      <p>Sorry this page does not exists</p>
    </div>
  )
}

export default NotFound