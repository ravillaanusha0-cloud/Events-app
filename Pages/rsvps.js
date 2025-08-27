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
              <strong>{r.users_table?.name}</strong> RSVP’d to <em>{r.events?.name}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase
    .from("rsvps")
    .select(`
      id,
      users_table ( name ),
      events ( name )
    `);

  return {
    props: { rsvps: data || [] },
  };
}
