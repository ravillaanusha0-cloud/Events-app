import { supabase } from "../lib/supabaseClient";

export default function RSVPsPage({ rsvps }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>RSVPs</h1>
      {rsvps.length === 0 ? (
        <p>No RSVPs found</p>
      ) : (
        <ul>
          {rsvps.map((r) => (
            <li key={r.id}>
              User {r.user_id} → Event {r.event_id} (Status: {r.status})
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
