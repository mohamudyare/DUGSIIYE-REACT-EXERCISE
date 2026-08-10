
const Header = ()=>{

    return(
        <div>
         <h1>Exercise 2 </h1>
        <h2>Marketing</h2>
        </div>
    )
}


const Post = ()=>{

    return(
        <div>
              <h3>Nike shoes</h3>
              <p>Built for speed: Nike unveils new mercurial vapor and superfly   football boots.
              </p>
        </div>
    )
}



const Footer = ()=>{

    return(
        <>
        <p>@copyright Market. All right reserved</p>  <br/> <br/> <br/>
        </>
    )
}



const Blog = ()=>{

    return(
        <>
            <Header/>
            <Post/>
            <Footer/>
        </>
    )
}



export default Blog;