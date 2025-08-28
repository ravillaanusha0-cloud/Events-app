import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Users({ users }) {
  return (
    <div>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.userid}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("users_table").select("*");

  if (error) {
    console.error("Error fetching users:", error.message);
    return { props: { users: [] } };
  }

  return { props: { users: data || [] } };
}
