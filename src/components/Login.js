import React, { useState } from 'react'
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate} from "react-router-dom";


const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate();
    const loginClicked= async ()=>{
    const response = await fetch(`http://localhost/api/auth/login`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',        
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    // if(response.status==400){
    //     alert("wtf")
    // }
    console.log(response)
    const data = await response.json()
    console.log(data)
    if(data.success){
      localStorage.setItem("token",data.token)
      navigate("/")
    }
    else{
      alert("not valid")
    }
    }
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
            
            <Link to="/login" class="btn btn-primary mx-3">Login</Link>
            <Link to="/signup" class="btn btn-primary">Sign Up</Link>

          </div>
        </div>
      </nav>
    <div className='container'>
        <h2>Login</h2>
    <TextField fullWidth className='my-3' value={email} onChange={(e)=>{setemail(e.target.value)}} style={{textAlign:"center",margin:"auto"}} id="standard-basic" label="Email Id" variant="standard" /><br/>
    <TextField fullWidth className='my-3' value={password} onChange={(e)=>{setpassword(e.target.value)}} style={{textAlign:"center"}} id="standard-basic" label="Password" variant="standard" />
    <Button className='my-3' disabled={email.length<5 || password.length<5} variant="contained" onClick={loginClicked}>Login</Button>
    {/* <a href='#' className="btn btn-primary" onClick={()=>navigate("/")}>hey</a> */}
    </div>
    </>
  )
}

export default Login