
const UserList = ({ users })=>{

    return(

        <>
        <div>
            <h1>Exercise 10</h1>

            <h2>Users List</h2>

            {
                users.length > 0 ? (

                    <ul>
                        {
                             users.map((user)=>(
                                <li key={user.id}>{user.name} ({user.email})</li>
                             ))
                        }
                    </ul>

                ) : ( <p>List not found</p> )
            }

        </div> <br/> <br/> <br/> <br/>

        </>
    )

}

export default UserList