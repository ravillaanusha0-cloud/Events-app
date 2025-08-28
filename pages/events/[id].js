import { supabase } from "../../lib/supabaseClient";

export default function EventDetails({ event, rsvps }) {
  if (!event) return <p>Event not found</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{event.title}</h1>
      <p>{event.description}</p>

      <h2>RSVPs</h2>
      {rsvps.length === 0 ? (
        <p>No RSVPs yet.</p>
      ) : (
        <ul>
          {rsvps.map((r) => (
            <li key={r.rsvpid}>
              User {r.userid} – {r.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  // fetch event details
  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("eventid", id)
    .single();

  // fetch RSVPs for that event
  const { data: rsvps } = await supabase
    .from("rsvps")
    .select("*")
    .eq("eventid", id);

  return {
    props: { event, rsvps: rsvps || [] },
  };
}
