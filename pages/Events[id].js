import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/router";

export default function EventPage({ event }) {
  const router = useRouter();

  const handleRSVP = async () => {
    await supabase.from("rsvps").insert([{ event_id: event.id, user_id: "test-user" }]);
    alert("RSVP Confirmed!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{event.title}</h1>
      <p>Date: {event.event_date}</p>
      <button onClick={handleRSVP}>RSVP</button>
      <br /><br />
      <button onClick={() => router.push("/")}>⬅ Back</button>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("id", params.id)
    .single();

  return { props: { event } };
}
