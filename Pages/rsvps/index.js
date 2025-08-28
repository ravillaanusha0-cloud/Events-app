import { supabase } from '../../lib/supabaseClient';

export default function Rsvps({ rsvps }) {
  return (
    <div>
      <h1>RSVPs</h1>
      <ul>
        {rsvps.map((rsvp) => (
          <li key={rsvp.rsvpid}>
            <p>User ID: {rsvp.userid}</p>
            <p>Event ID: {rsvp.eventid}</p>
            <p>Status: {rsvp.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: rsvps, error } = await supabase.from('rsvps').select('*');
  if (error) {
    console.error(error);
    return { props: { rsvps: [] } };
  }
  return { props: { rsvps } };
}
