import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

export default function Events({ events }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.eventid}>
            <Link href={`/events/${event.eventid}`}>
              {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("events").select("*");
  if (error) console.error("Fetch events error:", error.message);
  return { props: { events: data || [] } };
}
