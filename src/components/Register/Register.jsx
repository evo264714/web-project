// import { useContext, useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { updateProfile } from "firebase/auth";
// import { AuthContext } from "../providers/AuthProvider";
// import Swal from "sweetalert2";

// const Register = () => {const { createUser, auth } = useContext(AuthContext);
// const [error, setError] = useState('');
// const [success, setSuccess] = useState('');
// const navigate = useNavigate();

// const handleRegistration = event => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const photo = form.photo.value;

//     createUser(email, password)
//         .then(result => {
//             const user = result.user;
//             updateProfile(auth.currentUser, {
//                 displayName: name, photoURL: photo
//             })
//             .then(() => {
//                 // Prepare user data with the role property
//                 const saveUser = { name: name, email: email, role: 'user' };

//                 // Send user data to the backend
//                 fetch('http://localhost:5000/users', {
//                     method: 'POST',
//                     headers: { 'content-type': 'application/json' },
//                     body: JSON.stringify(saveUser)
//                 })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.insertedId) {
//                         setError('');
//                         form.reset();
//                         Swal.fire({
//                             position: 'top-end',
//                             icon: 'success',
//                             title: 'User created successfully',
//                             showConfirmButton: false,
//                             timer: 1500
//                         });
//                         navigate('/');
//                     }
//                 });
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//         })
//         .catch(error => {
//             setError(error.message);
//         });
// };

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, auth } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                return updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => user); // Continue with the updated user data
            })
            .then(user => {
                // Prepare user data with the role property
                const saveUser = { name: name, email: email, role: 'user' };

                // Send user data to the backend
                return fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(saveUser)
                });
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                } else {
                    throw new Error('Failed to save user data');
                }
            })
            .catch(error => {
                console.error('Registration Error:', error);
                setError('Failed to register. Please try again.');
            });
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex-1">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-semibold mb-4">Registration</h2>
                    <form onSubmit={handleRegistration}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photoUrl" className="block text-gray-700">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                id="photoUrl"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your photo URL"
                            />
                        </div>
                        <input
                            type="submit"
                            value='Register'
                            className="w-full py-2 bg-accent text-white rounded-lg hover:bg-success"
                        />

                        <label>
                            <span className="text-red-600">{error}</span>
                            <span className="text-green-600">{}</span>
                        </label>

                        <p className="mt-4">Already Have An Account? Please Login

                            <Link className="underline" to='/login'> Here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;