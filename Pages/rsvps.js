import { supabase } from "../lib/supabaseClient";

export default function RsvpsPage({ rsvps }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>RSVPs</h1>
      {rsvps.length === 0 ? (
        <p>No RSVPs found</p>
      ) : (
        <ul>
          {rsvps.map((r) => (
            <li key={r.id}>
              User {r.user_id} RSVP’d to Event {r.event_id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("rsvps").select("*");
  return {
    props: { rsvps: data || [] },
  };
}
