// pages/rsvps.js
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function RSVPsPage() {
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    async function fetchRsvps() {
      let { data, error } = await supabase
        .from("rsvps")
        .select("id, users(name), events(title)");
      if (!error) setRsvps(data);
    }
    fetchRsvps();
  }, []);
  

  return (
    <div style={{ padding: 20 }}>
      <h1>RSVPs 📌</h1>
      <ul>
        {rsvps.map((r) => (
          <li key={r.id}>
            {r.users?.name} RSVP’d for <strong>{r.events?.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
Added users_table page fetching from Supabase
