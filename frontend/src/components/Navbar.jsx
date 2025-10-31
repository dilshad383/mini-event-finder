import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg text-blue-600">
        EventFinder
      </Link>
      <Link
        to="/create"
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        + Add Event
      </Link>
    </nav>
  );
}

export default Navbar;
