// pages/rsvps.js
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function RSVPs() {
  const [rsvps, setRsvps] = useState([])
  const [userid, setUserid] = useState("")
  const [eventid, setEventid] = useState("")
  const [status, setStatus] = useState("going")

  useEffect(() => {
    fetchRSVPs()
  }, [])

  async function fetchRSVPs() {
    const { data } = await supabase.from("rsvps").select("*")
    setRsvps(data)
  }

  async function addRSVP(e) {
    e.preventDefault()
    await supabase.from("rsvps").insert([{ userid, eventid, status }])
    setUserid("")
    setEventid("")
    setStatus("going")
    fetchRSVPs()
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>RSVPs</h2>
      <form onSubmit={addRSVP}>
        <input placeholder="User ID" value={userid} onChange={e => setUserid(e.target.value)} required />
        <input placeholder="Event ID" value={eventid} onChange={e => setEventid(e.target.value)} required />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="going">Going</option>
          <option value="not going">Not Going</option>
        </select>
        <button type="submit">Add RSVP</button>
      </form>
      <ul>
        {rsvps?.map(r => (
          <li key={r.rsvpid}>
            User {r.userid} → Event {r.eventid} ({r.status})
          </li>
        ))}
      </ul>
    </div>
  )
  }
