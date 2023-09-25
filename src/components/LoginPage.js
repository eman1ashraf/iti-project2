function LoginPage(props){
    function login(event){
        event.preventDefault()
      
    
            localStorage.setItem("token","ahmed")
            props.handleLogin(true)

    }
    
    return(
    <>
    <div className="container mb-7" id="contain">

    <form onSubmit={login}>
        <div class="form-group">
            <label for="name">name</label>
            <input type="text" className="form-control" placeholder="Enter name" name="name"/>

        </div>
        <div class="form-group">
            <label for="mail">email</label>
            <input type="text" class="form-control" placeholder="Enter your email" name="email"></input>
        </div>
        
    </form>
    
    </div>
    <button type="submit" class="btn btn-primary mx-auto d-block" id="bi">Login</button>
    </>)
}
export default LoginPage