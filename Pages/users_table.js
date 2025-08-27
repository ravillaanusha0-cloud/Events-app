import { supabase } from "../lib/supabaseClient";

export default function UsersPage({ users }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              <strong>{u.name}</strong> ({u.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("users_table").select("*");
  return {
    props: { users: data || [] },
  };
}
