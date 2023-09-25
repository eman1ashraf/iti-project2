import { Link } from "react-router-dom";

function AppHeader(){
    return (
     
    <header class="d-flex py-3  border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">

        <span class="fs-4">Contacts Info </span>
      </a>

      <ul class="nav nav-pills">
     
        <li class="nav-item"><Link to={`home` }  class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><Link to={`addcontact` } className="nav-link">Add_Contact</Link></li>
        <li class="nav-item"><Link to={`login`} class="nav-link">Login</Link></li>
      </ul>
    </header>

    );
} 
export default AppHeader;