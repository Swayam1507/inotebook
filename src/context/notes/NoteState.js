import React, { useEffect } from 'react'
import noteContext from './NoteContext'
import { useState, useRef } from 'react'


const NoteState = (props) => {
  const [notes, setnotes] = useState([])
  // useEffect(() => {
  //   getnotes()
  // }, [notes])
  const getnotes = async () => {
    // const response = await fetch("http://192.168.60.182:80/api/notes/fetchallnotes", {
      // console.log(localStorage.getItem("token"))
    const response = await fetch("http://localhost/api/notes/fetchallnotes", {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlNGIzN2ZiMDM5NGVhNGExZTczMThhIn0sImlhdCI6MTY1OTE1NTMyN30.VilWmq8_4kLkBGXtSds8h6cYevNnJN0uSqiWjnc3I-w"
        "auth-token": localStorage.getItem("token")

      },
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    // const data= await response.json()
    //   console.log(response)
    //   setnotes(response)
    const data = await response.json()
    setnotes(data)
    console.log(data)
    //   console.log(ok)
  }
  const [data, setdata] = useState("")
  const [title, settitle] = useState("")
  const [description, setDescription] = useState("")
  const subClicked = (e) => {
    e.preventDefault();
    console.log("helo")
    // setnotes([...notes,{"title":title,"description":description}])
    // setnotes([...notes,JSON.stringify(data)])
    // setnotes(notes.concat(data))
    addnote()
  }
  const titlechange = (e) => {
    settitle(e.target.value)
  }
  const descriptionchange = (e) => {
    setDescription(e.target.value)
  }
  const addnote = async () => {
    const response = await fetch("http://localhost/api/notes/addnote", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlNGIzN2ZiMDM5NGVhNGExZTczMThhIn0sImlhdCI6MTY1OTE1NTMyN30.VilWmq8_4kLkBGXtSds8h6cYevNnJN0uSqiWjnc3I-w"
        "auth-token": localStorage.getItem("token")

      },
      body: JSON.stringify({
        title: title,
        description: description
      }) // body data type must match "Content-Type" header
    });
    // const data= await response.json()
    //   console.log(response)
    //   setnotes(response)
    const data = await response.json()
    // setnotes(data)
    setnotes([...notes, data])
    console.log(data)
    // setdata(data)

  }
  const deleteclicked = async (id) => {
    const response = await fetch(`http://localhost/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlNGIzN2ZiMDM5NGVhNGExZTczMThhIn0sImlhdCI6MTY1OTE1NTMyN30.VilWmq8_4kLkBGXtSds8h6cYevNnJN0uSqiWjnc3I-w"
        "auth-token": localStorage.getItem("token")


      }
    });
    // const data= await response.json()
    //   console.log(response)
    //   setnotes(response)
    const data = await response.json()
    // setnotes(data)
    console.log(data)
    console.log(id)
    const note = notes.filter((note) => { return id !== note._id })
    console.log(note)
    setnotes(note)
  }
  const [etitle, setetitle] = useState("")
  const [edescription, setedescription] = useState("")
  const etitlechange = (e) => {
    setetitle(e.target.value)
  }
  const edescriptionchange = (e) => {
    setedescription(e.target.value)
  }
  const [editnote, seteditnote] = useState("")
  const ref = useRef(null)
  const editclicked = (note) => {
    ref.current.click()
    seteditnote(note)
    console.log(note)
    setetitle(note.title)
    setedescription(note.description)
    // for (let i = 0; i < notes.length; i++) {
    //   console.log(notes[i]._id)
    //   if (notes[i]._id === note.id) {
    //     note[i].title = etitle
    //     // setetitle(etitle)
    //     note[i].description = edescription
    //     // setedescription(edescription)
    //     break;
    //   }
    // }
    // setnotes(notes)
    // let newNotes = JSON.parse(JSON.stringify(notes))
    // // Logic to edit in client
    // for (let index = 0; index < newNotes.length; index++) {
    //   const element = newNotes[index];
    //   if (element._id === note._id) {
    //     newNotes[index].title = etitle;
    //     newNotes[index].description = edescription;
    //     // newNotes[index].tag = tag; 
    //     break;
    //   }
    // }
    // setnotes(newNotes);
    
    console.log("allnotes",notes)
  }
  // const closeRef = useRef(null)
  const saveclicked = async (note) => {
    // closeRef.current.click()
    console.log("why the fuck this is not closing")
    console.log("allnotes",notes)
    // console.log(note);
    
    // console.log("editnote",editnote)
    // console.log("save", note._id,note,etitle)
    const response = await fetch(`http://localhost/api/notes/updatenote/${editnote._id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlNGIzN2ZiMDM5NGVhNGExZTczMThhIn0sImlhdCI6MTY1OTE1NTMyN30.VilWmq8_4kLkBGXtSds8h6cYevNnJN0uSqiWjnc3I-w"
        "auth-token": localStorage.getItem("token")

        
      },
      body: JSON.stringify({
        title: etitle,
        description: edescription
      })
    });
    const data = await response.json()
    // // setnotes(data)
    // const parsedData = await JSON.parse(data)
    // console.log("data",data.title)
    // const newNotes = notes
    // for (let i = 0; i < data.length; i++) {
      //   console.log(notes[i]._id)
      //   if (data._id === note._id) {
        //     newNotes[i].title = etitle
        //     // setetitle(etitle)
        //     newNotes[i].description = edescription
        //     // setedescription(edescription)
        //     break;
        //   }
        // }
        // console.log("allnotes",notes)
        let newNotes = await JSON.parse(JSON.stringify(notes))
        // let newNotes = notes
        console.log("nwww",newNotes)
        console.log(data.note)
        // const parsedData = JSON.parse(JSON.stringify(data))
        // console.log(parsedData.title)
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === editnote._id) {
            newNotes[index].title = data.note.title;
            newNotes[index].description = data.note.description;
            // newNotes[index].tag = tag; 
            break;
          }
        }
        // setnotes(newNotes);
        console.log("newnotes",newNotes)
        
        setnotes(newNotes)
        console.log(notes)
        
      }
  return (
    <noteContext.Provider value={{ notes: notes, getnotes: getnotes, setnotes: setnotes, title, description, titlechange, descriptionchange, subClicked, addnote, deleteclicked, etitle, edescription, etitlechange, edescriptionchange, editclicked, ref, saveclicked }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState