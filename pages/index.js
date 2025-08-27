
// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Events App 🎉</h1>
      <nav>
        <Link href="/events">Events</Link> |{" "}
        <Link href="/users">Users</Link> |{" "}
        <Link href="/rsvps">RSVPs</Link>
      </nav>
      <p>Welcome! Use the links above to explore the app.</p>
    </div>
  );
}
