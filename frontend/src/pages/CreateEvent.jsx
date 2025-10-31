import { useState } from "react";
import { createEvent } from "../api/events";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    maxParticipants: 10,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent({ ...form, currentParticipants: 0 });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 w-full rounded"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 w-full rounded"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max Participants"
          className="border p-2 w-full rounded"
          value={form.maxParticipants}
          onChange={(e) =>
            setForm({ ...form, maxParticipants: e.target.value })
          }
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded w-full hover:bg-blue-600"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
