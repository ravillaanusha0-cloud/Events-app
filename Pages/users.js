// pages/users.js
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function Users() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const { data } = await supabase.from("users_table").select("*")
    setUsers(data)
  }

  async function addUser(e) {
    e.preventDefault()
    await supabase.from("users_table").insert([{ name, email }])
    setName("")
    setEmail("")
    fetchUsers()
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Users</h2>
      <form onSubmit={addUser}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users?.map(u => (
          <li key={u.userid}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  )
  }
git add .
git commit -m "Added Supabase client and pages"
git push origin main
