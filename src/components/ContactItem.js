import { Link } from "react-router-dom";

function ContactItem(props){
    return (
        
       
       <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card ">
        <div className="card-body text-center">
        <img src="https://tse2.mm.bing.net/th?id=OIP.yzJ_sr_an0WdeSNBVhCiHgAAAA&pid=Api&P=0&h=180" class="imgthumbnail"alt="" />
            <h4 className="card-title ">{props.dataObject.name}</h4>
            <p classN="card-text"> {props.dataObject.email}</p>
            <p className="card-text"> {props.dataObject.address.city}</p>
                <Link to={`/Profile/${props.dataObject.id}` }className="btn btn-primary">contact_profile</Link>
        </div>
        </div>
        </div>

    );
} 
export default ContactItem;