import { useState ,createContext, useContext} from "react";
import ContactItem from "./ContactItem";



function ContactsList(props){
   // const user=useContext(UserContext)

return(
    <div class="container my-5">
    <div  class="row g-3">
{props.data.map((contact,index) =>{
return(
    <ContactItem dataObject={contact} ></ContactItem>



)
})
    
}

</div>
</div>
)





}
export default ContactsList;