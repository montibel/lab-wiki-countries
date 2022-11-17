import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <h1>LAB - WikiCountries</h1>
      </div>
    </nav>
  );
}
export default Navbar;
