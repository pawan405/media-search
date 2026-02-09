
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 mt-4">
        <Link className="text-lg bg-(-c4) text-(-c1) rounded px-4 py-2" to="/">
          Search
        </Link>
        <Link
          className="text-lg bg-(-c4) text-(-c1) rounded px-4 py-2"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
}

export default NavBar
