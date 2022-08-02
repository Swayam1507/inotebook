import React, { useContext, useRef } from 'react'
import noteContext from '../context/notes/NoteContext'

const Notes = (props) => {
    // const ref = useRef(null)
    // const editclicked = () => {
    //     ref.current.click()
    // }
    const { deleteclicked, etitle, etitlechange, edescription, edescriptionchange, subClicked,editclicked,ref,saveclicked } = useContext(noteContext)
    const Refclose = useRef(null)
    return (
        <div className='col-4 mt-3'>
            {/* {props.note._id} */}
            <div >
                {/* <!-- Button trigger modal --> */}
                <button type="button" ref={ref} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit note</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="etitle" class="form-label">Title</label>
                                        <input type="text" name='etitle' class="form-control" id="etitle" aria-describedby="emailHelp" value={etitle} onChange={etitlechange} />
                                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>
                                    <div class="mb-3">
                                        <label for="edescription" class="form-label">Description</label>
                                        <input type="text" name='edescription' class="form-control" value={edescription} onChange={edescriptionchange} id="description" />
                                    </div>
                                    {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" ref={Refclose} class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                                <button type="button" class="btn btn-primary" onClick={()=>{saveclicked(props.note)
                                Refclose.current.click()}}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card' >
                    <div class="card-body">
                        <div style={{ display: "flex", alignItems: "center" }}>

                            <h5 class="card-title" style={{ marginBottom: "0px", marginRight: "15px" }}>{props.note.title}</h5>
                            {/* <span><i class="fa-solid fa-pen"></i></span> */}
                            <i class="fas fa-edit" onClick={() => { editclicked(props.note) }} style={{ position: "absolute", right: "40px", cursor: "pointer", fontSize: "20px" }}></i>
                            <i class="fas fa-trash" onClick={() => { deleteclicked(props.note._id) }} style={{ position: "absolute", right: "12px", cursor: "pointer", fontSize: "20px" }}></i>
                            {/* <i class="fa-solid fa-circle-trash"></i> */}
                        </div>
                        <p class="card-text">{props.note.description}</p>
                        {/* <i class="fab-solid fa-circle-trash"></i> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes;