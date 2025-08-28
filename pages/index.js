import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Events Platform 🎉</h1>
      <p>Navigate to see data:</p>
      <ul>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/rsvps">RSVPs</Link></li>
      </ul>
    </div>
  );
}
