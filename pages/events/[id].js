import { supabase } from "../../lib/supabaseClient";

export default function Events({ events }) {
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("events").select("*");

  if (error) {
    console.error(error);
  }

  return {
    props: {
      events: data || [],
    },
  };
}
