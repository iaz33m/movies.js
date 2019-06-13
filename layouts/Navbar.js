import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar sticky-top navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <Link href="/"><a className="navbar-brand">Movies.js</a></Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          
          <li className="nav-item">
            <Link href="/movies">
              <a className="nav-link" title="Movies">Movies</a>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link" title="About">About</a>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;