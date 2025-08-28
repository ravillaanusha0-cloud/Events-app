import { supabase } from "../../lib/supabaseClient";

export default function EventDetails({ event }) {
  if (!event) {
    return <div style={{ padding: "2rem" }}>Event not found</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{event.title}</h1>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Event ID:</strong> {event.eventid}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("eventid", id)
    .single();

  if (error) {
    console.error("Fetch single event error:", error.message);
    return { props: { event: null } };
  }

  return { props: { event: data } };
}
