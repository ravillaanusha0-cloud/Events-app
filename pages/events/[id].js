import { supabase } from "../lib/supabaseClient";

export default function EventsPage({ events }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Events</h1>
      {events.length === 0 ? (
        <p>No events found</p>
      ) : (
        <ul>
          {events.map((e) => (
            <li key={e.id}>
              {e.title} - {e.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("events").select("*");
  return {
    props: { events: data || [] },
  };
}
