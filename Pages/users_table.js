
// pages/users.js
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function users_tablePage() {
  const [users_table, setUsers] = useState([]);

  useEffect(() => {
    async function fetchusers_table() {
      let { data, error } = await supabase.from("users_table").select("*");
      if (!error) setusers_table(data);
    }
    fetchusers_table();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>users_table 👥</h1>
      <ul>
        {users_table.map((u) => (
          <li key={u.id}>
            {u.name} – {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
Added users_table page fetching from Supabase
