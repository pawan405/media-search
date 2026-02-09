import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 mt-4">
        <Link
          className="text-lg bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700 transition"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-lg bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700 transition"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
