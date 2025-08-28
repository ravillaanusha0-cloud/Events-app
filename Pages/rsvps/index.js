import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function RSVPs({ rsvps }) {
  return (
    <div>
      <h1>RSVPs</h1>
      {rsvps.length === 0 ? (
        <p>No RSVPs found</p>
      ) : (
        <ul>
          {rsvps.map((rsvp) => (
            <li key={rsvp.rsvpid}>
              User: {rsvp.userid} | Event: {rsvp.eventid} | Status: {rsvp.status}
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
