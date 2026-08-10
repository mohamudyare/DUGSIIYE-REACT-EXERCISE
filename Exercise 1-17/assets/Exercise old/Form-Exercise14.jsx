
import {useReducer} from 'react';



const initialState =  {
    step:1 ,
    FirstName: "" ,
    LastName: "" ,
    Email: "" ,
    Phone: ""

}


const reducer = (state , action) => {

    switch(action.type){

        case "Update_Failed" :
            return  {...state , [action.field] : action.value}

       case "Next_Step" :
            return {...state ,step: state.step + 1}  
            
       case "Back_Step" :
            return {...state , step: state.step -1} 
            
       case "Confirm_Step" :
            return {...state , state: 4}
            
        default :
            return state;    

    }
}






const  FormRegistration = () => {


    const [state , dispatch] = useReducer(reducer , initialState)


    const handleChange = (e)=>{
        
        dispatch({
            type: 'Update_Failed' ,
            field: e.target.name , 
            value: e.target.value ,
        });
    }



    const nextStep = ()=>  dispatch({type:"Next_Step"})
    const backStep = ()=>  dispatch({type:"Back_Step"})
    const confirmForm = ()=>  dispatch({type:"Confirm_Step"})


    const handleSubmit = ()=> {

        alert("Form Submited successfully")
        confirmForm();
    }


    return(
        <>

            <h1>Multi-step Registration Exercise-14</h1>

            {/* step 1 */}
            {state.step === 1 && (

                 <div>
                    <h2>Step 1 : profile</h2>

                    <label>FirstName:</label>
                    <input 
                      type="text"
                      placeholder="First Name"
                        required
                      name="FirstName"  
                      value={state.FirstName}
                      onChange={handleChange}
                     /> <br />

 

                      <label>LastName:</label>
                    <input 
                      type="text"
                      placeholder="Last Name"
                     required
                      name="LastName"
                      value={state.LastName}
                      onChange={handleChange}
                     /> 

                     <button onClick={nextStep}>Next</button> <br />
            </div>
            )}
           

            {/* step 2 */}
            {state.step === 2 && (
                 <div>
                  <h2>Step 2 : Contact</h2>

                    <label>Email:</label>
                    <input 
                      type="email"
                      placeholder="Enter your email"
                      required
                      name="Email" 
                      value={state.Email} 
                      onChange={handleChange}
                     /> <br />

                                      
                     <label>Phone:</label>
                    <input 
                      type="text"
                      placeholder="Enter your phone"
                      required
                       name="Phone" 
                       value={state.Phone}
                      onChange={handleChange}
                     /> <br />
                     <button onClick={backStep}>Back</button>
                     <button onClick={nextStep}>Next</button>
            </div>
            )}
           


            {/* step 3 */}

            {state.step === 3 &&(
                 <div>
                    <h2>Step 3 : Reveiw</h2>

                    <p>
                        <strong>FirstName:</strong>  {state.FirstName}
                    </p>

                    <p>
                        <strong>LastName:</strong> {state.LastName}
                    </p>

                    <p>
                        <strong>Email:</strong>  {state.Email}
                    </p>

                    <p>
                        <strong>Phone:</strong>  {state.Phone}
                    </p>
                 
                     <button onClick={backStep}> Back</button>
                    <button onClick={handleSubmit}>Confirm</button>
            </div>
            )}
           


           {/*  step3  part 2 */}

            {state.step > 3 && (

                <div>
                   <h3>Form Completed</h3>
                    <button onClick={confirmForm}>Start Over</button>
                </div>
            )}


        </>
    )

}




export default FormRegistration ;