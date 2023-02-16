import  {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar px-5 py-8 shadow-sm flex justify-between bg-white">
            <h1>DummyAPI</h1>
            <div className="links">
                <Link className='text-xl font-bold' to="/users">Users</Link>
            </div>
        </nav>
    );
}

export default Navbar;