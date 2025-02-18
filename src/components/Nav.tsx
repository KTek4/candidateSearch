import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const navLocation = useLocation();
  return (
    <nav className='nav'>
      <Link key={1} to="/" className={navLocation.pathname === '/' ? 'nav-item nav-link active' : 'nav-item nav-link'}>
        Home
      </Link>
      <Link key={2} to="/SavedCandidates" className={navLocation.pathname === '/SavedCandidates' ? 'nav-item nav-link active' : 'nav-item nav-link'}>
        Potential Candidates
      </Link>
    </nav>
  )
};

export default Nav;
