import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          ProjectHub
        </h1>

        <div className="flex gap-6">
          <Link to="/home">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/account">Account</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;