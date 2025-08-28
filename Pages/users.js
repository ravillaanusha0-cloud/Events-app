import { supabase } from '../../lib/supabaseClient';

export default function Users({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userid}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Created At: {user.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: users, error } = await supabase.from('users_table').select('*');
  if (error) {
    console.error(error);
    return { props: { users: [] } };
  }
  return { props: { users } };
}
