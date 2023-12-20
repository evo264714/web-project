import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const headerStyle = {
        background: 'linear-gradient(to right, #2c3e50, #1a1a1a)',
        color: 'white',
    }
    const { user, auth, logOut } = useContext(AuthContext);
    console.log(auth.currentUser);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className='sm:w-full w-full md:flex items-center justify-between p-6' style={headerStyle}>
            <NavLink to="/" className='text-4xl font-bold text-orange-400'>UIU Healthcare</NavLink>

            <nav className='text-orange-400'>
                <NavLink className='me-6'
                    to="/"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    HomePage
                </NavLink>

                <NavLink className='me-6'
                    to="/hospitals"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Search Hospitals
                </NavLink>
                {!user ? <NavLink className='me-6'
                    to="/register"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Register
                </NavLink> : ""}
                {user && user.email === 'admin@admin.com' ? (
                    <NavLink
                        className='me-6'
                        to="/dashboard"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                            };
                        }}
                    >
                        Dashboard
                    </NavLink>
                ) : ""}
                {user ? <NavLink className='me-6'
                    to="appointment"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Appointment
                </NavLink> : ''}


                {user && user.email !== 'admin@admin.com'?  <NavLink className='me-6'
                    to="prescriptions"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    My Prescription
                </NavLink> : ''}



            </nav>
            <div className='flex w-36 justify-between items-center'>
                {user && <img className='w-10 rounded-full' title={user.displayName} src={user.photoURL} />}

                {user ?

                    <button
                        onClick={handleLogOut}
                        className="bg-orange-400 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                        Logout
                    </button> :

                    <div className="flex items-center">

                        {user ? (
                            <button
                                onClick={handleLogOut}
                                className="btn btn-outline btn-success text-xl font-semibold mr-1"
                            >
                                Log Out
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="btn btn-outline btn-warning text-xl font-semibold">Login</button>
                            </Link>
                        )}
                        {user && (
                            <img className="w-10 rounded-full mr-2" title={user?.displayName} src={user?.photoURL} alt="" />
                        )}
                    </div>


                }

            </div>

        </div>
    );
};

export default Navbar;