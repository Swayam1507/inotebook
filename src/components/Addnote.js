import React,{useContext, useRef, useState} from 'react'
import noteContext from '../context/notes/NoteContext'

const Addnote = () => {
    const {setnotes,notestitle,title , description , titlechange , descriptionchange, subClicked} = useContext(noteContext)
    // const [title, settitle] = useState("")
    // const [description, setDescription] = useState("")
    // const subClicked=(e)=>{
    //     e.preventDefault();
    //     console.log("helo")
    //     setnotes([...notes,{"title":title,"description":description}])
    // }
    // const titlechange=(e)=>{
    //     settitle(e.target.value)
    // }
    // const descriptionchange=(e)=>{
    //     setDescription(e.target.value)
    // }
    return (
        <div className='container'>
            <h1 >Add note</h1>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" name='title' class="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={titlechange}/>
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" name='description' class="form-control" value={description} onChange={descriptionchange} id="description"/>
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary" onClick={subClicked}>Submit</button>
            </form>
        </div>
    )
}

export default Addnote