import { useState } from "react";

function AddContact(){
    const [isSubmitted,setisSubmitted]=useState(false)
    const [isNameInvalid,setisNameIsInvalid]=useState(false)
    function save(event){
        event.preventDefault()
        const nameV=event.target.elements.name.value;
        const emailV =event.target.elements.email.value;
        if(nameV.trim().length==0){
            setisNameIsInvalid(true)
        

        }
        fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            body:JSON.stringify({
                name:nameV,
                email:emailV
            })
            ,headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        .then(()=>{setisSubmitted(true)
        event.target.elements.name.value=""
        event.target.elements.email.value=""
        })
    }
    
    return(
    <>
    <div className="container mb-7" id="contain">
       {isSubmitted && <div className="alert alert-success text-center">submitted successfully!</div>}
    <form onSubmit={save}>
        <div class="form-group">
            <label for="name">name</label>
            <input type="text" className="form-control" placeholder="Enter name" name="name"/>
           {isNameInvalid&& <div className="alert alert-danger">name is required</div>}
        </div>
        <div class="form-group">
            <label for="mail">email</label>
            <input type="text" class="form-control" placeholder="Enter your email" name="email"></input>
        </div>
    <div className="m-2">
    <button type="submit" class="btn btn-primary mx-auto d-block" id="bi">add</button>
    </div>
    </form>
 
    </div>
   
    
    </>)
}
export default AddContact
    <button type="submit" class="btn btn-primary mx-auto d-block" id="bi">Register</button>
    
    </>)
}
export default AddContact
