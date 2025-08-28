// pages/events.js
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents()
  }, [])

  async function fetchEvents() {
    const { data } = await supabase.from("events").select("*")
    setEvents(data)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Events</h2>
      <ul>
        {events?.map(ev => (
          <li key={ev.eventid}>
            <b>{ev.title}</b> - {ev.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
git add .
git commit -m "Added Supabase client and pages"
git push origin main
