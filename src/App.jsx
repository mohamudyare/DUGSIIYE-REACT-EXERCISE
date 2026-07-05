import Usecard  from './Exercise1'
import Blog  from './Exercise2'
import  DynamicCard from './Exercise3'


function App(){

    return(
        <>
           <Usecard/>
           <Blog/>

         <DynamicCard  name={"moha khalid"}  email={"mohak87@gmailcom"} />
         <DynamicCard  name={"jaamac xasan"}  email={"jamac12@gmail.com"}/>
         <DynamicCard  name={"Faarx wraabe"}  email={"Faarxa@gmail.com"}/>
        </>
    )
}


export default App;