import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/router";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from("events").insert([{ title, event_date: eventDate }]);
    router.push("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>➕ Create Event</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br /><br />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
