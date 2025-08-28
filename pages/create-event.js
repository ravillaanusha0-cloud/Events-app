// pages/create-event.js
import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function CreateEvent() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  async function addEvent(e) {
    e.preventDefault()
    await supabase.from("events").insert([{ title, description }])
    setTitle("")
    setDescription("")
    alert("Event created!")
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Event</h2>
      <form onSubmit={addEvent}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <button type="submit">Add Event</button>
      </form>
    </div>
  )
  }
git add .
git commit -m "Added Supabase client and pages"
git push origin main
