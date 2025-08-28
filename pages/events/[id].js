import { supabase } from '../../lib/supabaseClient';

export default function Events({ events }) {
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.eventid}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: events, error } = await supabase.from('events').select('*');
  if (error) {
    console.error(error);
    return { props: { events: [] } };
  }
  return { props: { events } };
}
