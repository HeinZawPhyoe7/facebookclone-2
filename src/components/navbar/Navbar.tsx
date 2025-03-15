import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2">
      <Link to="/home">Nav</Link>
      <div className="flex justify-end gap-4">
        <div className="hover:text-blue-500">
          <Link to="/create-post">Create Post</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link to="/login">Login</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
