import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../api/events";

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) getEventById(id).then((res) => setEvent(res.data));
  }, [id]);

  if (!event) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="mt-2 text-gray-600">{event.description}</p>
      <p className="mt-2">📍 {event.location}</p>
      <p className="mt-2">📅 {event.date}</p>
      <p className="mt-2">
        👥 {event.currentParticipants}/{event.maxParticipants} participants
      </p>
    </div>
  );
}

export default EventDetail;
