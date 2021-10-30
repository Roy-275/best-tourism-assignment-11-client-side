import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Register = () => {

    const auth = getAuth();
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { signInUsingGoogle } = useAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        registerNewUser(email, password);

    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(redirect_uri);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    return (

        <div>
            <Header></Header>
            <h1 className="md:text-5xl sm:text-3xl font-bold text-pink-600 my-5">Register Here</h1>
            <div className="flex justify-center">
                <div className="text-left bg-blue-100 md:px-6 sm:px-2 rounded-sm py-2">
                    <form onSubmit={handleRegistration}>

                        {/* Name input field */}
                        <div className="flex my-3 justify-between">
                            <span className="text-purple-900 text-xl font-bold">Your Name:</span>  <input onBlur={handleNameChange} className="border-2 ml-3" type="text" name="name" placeholder="Your name" />
                        </div>

                        {/* email input field */}
                        <div className="flex my-3 justify-between">
                            <span className="text-purple-900 text-xl font-bold">Email:</span>  <input onBlur={handleEmailChange} className="border-2 ml-3" type="email" name="email" placeholder="Input your email here" />
                        </div>

                        {/* password input field */}
                        <div className="flex my-3 justify-between">
                            <span className="text-purple-900 text-xl font-bold">Password:</span> <input onBlur={handlePasswordChange} className="border-2 ml-3" type="password" name="password" placeholder="Your password" />
                        </div>

                        <div className="text-red-400">
                            {error}
                        </div>

                        {/* submit button input field */}
                        <div className="text-right">
                            <input className="px-4 py-1 font-bold text-white text-xl bg-green-400 hover:bg-green-300 cursor-pointer hover:text-green-800" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>

            {/* Login with google button */}
            <div className="my-3">
                <h3 className="text-2xl mb-2 text-red-600 font-bold">Or Join With</h3>
                <button onClick={handleGoogleLogin} className="border-2 p-2 rounded-lg bg-yellow-500 text-red-700 font-bold text-3xl">
                    <i class="fab fa-google"></i>
                </button>
            </div>

            {/* toggle to login link */}
            <div>
                <p className="text-lg mb-2">Already have an account? <Link to="/login">
                    <span className="text-blue-500 underline">
                        Login</span></Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;