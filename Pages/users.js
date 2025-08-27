import { supabase } from "../lib/supabaseClient";

export default function Users({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("users").select("*");
  return { props: { users: data || [] } };
}
