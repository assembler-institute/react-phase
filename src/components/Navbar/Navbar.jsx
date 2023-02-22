import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <li>
        <Link to={'/'}>HOME</Link>
      </li>
      <li>
        <Link to={'/dashboard'}>DASHBOARD</Link>
      </li>
    </nav>
  );
}

export default Navbar;
