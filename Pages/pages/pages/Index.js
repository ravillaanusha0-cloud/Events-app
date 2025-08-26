import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

export default function Home({ events }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📅 Events</h1>
      <Link href="/create">➕ Create Event</Link>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link href={`/event/${event.id}`}>
              {event.title} - {event.event_date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: events } = await supabase.from("events").select("*");
  return { props: { events } };
}
