import { Link } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <nav style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <span style={{ marginLeft: '1rem' }}>Welcome, {user.username}</span>
          <Link to="/create" style={{ marginLeft: '1rem' }}>Create Post</Link>
          <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginLeft: '1rem' }}>Login</Link>
          <Link to="/register" style={{ marginLeft: '1rem' }}>Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;