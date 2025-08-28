import { supabase } from "../lib/supabaseClient";

export default function Users({ users }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.userid}>
              <strong>{user.name}</strong> — {user.email}
              <br />
              Joined: {user.created_at}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("users_table").select("*");
  if (error) console.error("Fetch users error:", error.message);
  return { props: { users: data || [] } };
}
