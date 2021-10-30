
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Login = () => {
    const auth = getAuth();
    const [error, setError] = useState('');
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
    };


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        processLogin(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <Header></Header>
            <h1 className="md:text-5xl sm:text-3xl font-bold text-pink-600 my-5">Please Login</h1>
            <div className="flex justify-center">
                <div className="text-left bg-blue-100 md:px-6 sm:px-2 rounded-sm py-2">
                    <form onSubmit={handleLogin}>

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

            {/* toggle to register link */}
            <div>
                <p className="text-lg mb-2">New to our website? <Link to="/register">
                    <span className="text-blue-500 underline">
                        Register Now</span></Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;