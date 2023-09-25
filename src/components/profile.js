import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile(){
    const[selectedContact, setSelectedContact]=useState(null);
    const params =useParams();
    let userId=params.id;
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/"+userId)
        .then(response => response.json())
        .then(data => setSelectedContact(data))
       }
        ,[userId])
        if(selectedContact!=null){
    return (
        
        <div class="bl mx-auto">
    <div class="card-body text-center">
    <img src="https://tse2.mm.bing.net/th?id=OIP.yzJ_sr_an0WdeSNBVhCiHgAAAA&pid=Api&P=0&h=180" class="img-thumbnail"alt="" />
        <h4 class="card-title ">{selectedContact.name}</h4>
        <p class="card-text">{selectedContact.email}</p>
        <p class="card-text"> {selectedContact.address.city}</p>
        
       
           
    </div>
    </div>

);}


   
} 
export default Profile;