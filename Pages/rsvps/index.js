import { supabase } from "../lib/supabaseClient";

export default function RSVPs({ rsvps }) {
  return (
    <div>
      <h1>RSVPs</h1>
      {rsvps.length === 0 ? (
        <p>No RSVPs found.</p>
      ) : (
        <ul>
          {rsvps.map((rsvp) => (
            <li key={rsvp.rsvpid}>
              RSVP ID: {rsvp.rsvpid} <br />
              User ID: {rsvp.userid} <br />
              Event ID: {rsvp.eventid} <br />
              Status: {rsvp.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("rsvps").select("*");

  if (error) {
    console.error("Error fetching RSVPs:", error.message);
    return { props: { rsvps: [] } };
  }

  return { props: { rsvps: data || [] } };
}
