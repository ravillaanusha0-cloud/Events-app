
// pages/events/index.js
import { supabase } from "../../lib/supabaseClient";
import Link from "next/link";

export default function Events({ events }) {
  return (
    <div>
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
  const { data: events } = await supabase.from("events").select("*");
  return { props: { events: events || [] } };
}
