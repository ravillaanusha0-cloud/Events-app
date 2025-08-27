
// pages/users.js
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      let { data, error } = await supabase.from("users").select("*");
      if (!error) setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Users 👥</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} – {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
Added users_table page fetching from Supabase
