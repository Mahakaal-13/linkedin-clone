import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { auth } from '../services/firebase'
import './Login.css'

function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch;

    const register = () => {
        if (!name) {
            return alert("Please enter a full Name");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        })
                        );
                    });
            })
            .catch(error => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();


    }


    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="" />
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name (required if registering)' />
                <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member?
                <span className="login__register" onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
