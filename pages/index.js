import { supabase } from "../../lib/supabaseClient";

export default function RSVPs({ rsvps }) {
  return (
    <div>
      <h1>RSVPs</h1>
      <ul>
        {rsvps.map((rsvp) => (
          <li key={rsvp.id}>
            <p>User ID: {rsvp.user_id}</p>
            <p>Event ID: {rsvp.event_id}</p>
            <p>Status: {rsvp.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("rsvps").select("*");

  if (error) {
    console.error(error);
  }

  return {
    props: {
      rsvps: data || [],
    },
  };
}
