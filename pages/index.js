// pages/index.js
import Link from "next/link"

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Events App</h1>
      <ul>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/rsvps">RSVPs</Link></li>
        <li><Link href="/create-event">Create Event</Link></li>
      </ul>
    </div>
  )
  }
