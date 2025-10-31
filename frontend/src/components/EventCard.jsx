import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{event.title}</h3>
      <p className="text-gray-600 text-sm">{event.location}</p>
      <p className="text-gray-500 text-xs">{event.date}</p>
      <Link
        to={`/event/${event.id}`}
        className="text-blue-500 mt-2 inline-block text-sm"
      >
        View Details →
      </Link>
    </div>
  );
}

export default EventCard;
