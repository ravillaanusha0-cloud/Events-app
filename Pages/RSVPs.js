import { supabase } from "../lib/supabaseClient";

export default function RSVPs({ rsvps }) {
  return (
    <div>
      <h1>RSVPs</h1>
      <ul>
        {rsvps.map(rsvp => (
          <li key={rsvp.id}>
            User {rsvp.user_id} → Event {rsvp.event_id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("rsvps").select("*");
  return { props: { rsvps: data || [] } };
}
