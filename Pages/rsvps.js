// pages/rsvps.js
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function rsvpsPage() {
  const [rsvps, setrsvps] = useState([]);

  useEffect(() => {
    async function fetchrsvps() {
      let { data, error } = await supabase
        .from("rsvps")
        .select("id, users_table(name), events(title)");
      if (!error) setrsvps(data);
    }
    fetchrsvps();
  }, []);
  

  return (
    <div style={{ padding: 20 }}>
      <h1>rsvps 📌</h1>
      <ul>
        {rsvps.map((r) => (
          <li key={r.id}>
            {r.users_table?.name} rsvp’d for <strong>{r.events?.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
Added users_table page fetching from Supabase
