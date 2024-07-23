import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        setUser(null);
        navigate('/login');
    };

    const loggedInUser = JSON.parse(localStorage.getItem('isLoggedIn'));

    useEffect(() => {
        if (loggedInUser && loggedInUser.status) {
            setUser(loggedInUser.name);
        }
    }, [loggedInUser]);

    return (
        <nav className="navbar">
            <Link to={"/"} className="flex items-center gap-3 w-12">
                <img src="https://ciand.net/images/ReactJs.png" alt="logo" />
                <h1 className=" text-3xl font-inter uppercase text-dark-grey">Movies</h1>
            </Link>

            <div className="flex items-center gap-3 md:gap-6 ml-auto">
                {user ? (
                    <>
                        <span className="username text-xl">{user}</span>
                        <Link className="btn-dark py-2" onClick={handleLogout}>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link className="btn-dark py-2" to="/login">Login</Link>
                        <Link className="btn-light py-2 hidden md:block" to="/signUp">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
