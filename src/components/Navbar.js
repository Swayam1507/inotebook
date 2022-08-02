import React, { useContext, useEffect, useLayoutEffect } from 'react';
import noteContext from '../context/notes/NoteContext';
import Addnote from './Addnote';
import Notes from './Notes';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate()
  const { notes, getnotes } = useContext(noteContext)
  useEffect(() => {
    console.log("useeffect")
    if(localStorage.getItem("token")==undefined){
      navigate("/login")
    }
    if(localStorage.getItem("token")){
      getnotes();
    }
  }, [])


  // console.log(notes)
  return (
    <div>
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
            {localStorage.getItem("token") &&  <a className='btn btn-primary' onClick={()=>{console.log("clicked"); localStorage.removeItem("token"); navigate("/login")}}>Logout</a>}
            {!localStorage.getItem("token") &&  <div><Link to="/login" class="btn btn-primary mx-3" onClick={() => {
              // navigate("/login")
            }}>Login</Link>
            <Link to="/signup" class="btn btn-primary">Sign Up</Link></div>}
            
          </div>
        </div>
      </nav>
      
      <Addnote />
      {/* alskdfjasldfkj */}
      <div className='container '>
        <div className='row '>

          {notes.map(note => {
            // console.log(note);

            return (
              <>
                <Notes key={note._id} note={note} />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar