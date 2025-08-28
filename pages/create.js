import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function CreateEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase
      .from('events')
      .insert([{ title, description }]);
    if (error) console.error(error);
    else alert('Event created!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create Event</button>
    </form>
  );
}
