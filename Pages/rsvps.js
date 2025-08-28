import { supabase } from "../lib/supabaseClient";

export default function RSVPs({ rsvps }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>RSVPs</h1>
      {rsvps.length === 0 ? (
        <p>No RSVPs found.</p>
      ) : (
        <ul>
          {rsvps.map((rsvp) => (
            <li key={rsvp.rsvpid}>
              RSVP ID: {rsvp.rsvpid} — User ID: {rsvp.userid} — Event ID: {rsvp.eventid} — Status: {rsvp.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("rsvps").select("*");
  if (error) console.error("Fetch RSVPs error:", error.message);
  return { props: { rsvps: data || [] } };
}
