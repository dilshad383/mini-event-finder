import { useEffect, useState } from "react";
import { getEvents } from "../api/events";
import EventCard from "../components/EventCard";

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading events...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Events</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;
