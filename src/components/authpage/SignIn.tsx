import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { signIn, signUpPage } from '../../store/actions/actions';

const SignIn : React.FC = () => {

    const dispatch = useDispatch();
    const [signInForm, setSignInForm] = useState({email: "", password: ""})

    const signInHandler = () => {
        dispatch(signIn(signInForm.email,signInForm.password));
    };

    const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setSignInForm({...signInForm,
            [event.currentTarget.name]:event.currentTarget.value
        });
        console.log(signInForm);
    };

    const signUpPageHandler = () => {
        dispatch(signUpPage());
    };

    const props = useSpring({
        from : {opacity : 0},
        to : { opacity: 1},
        delay: 300
    })

    return (
        <animated.div style = {props} className = "flex bg-white sm:h-3/4 sm:w-2/3 mx-auto my-auto rounded-xl shadow-2xl">
            <div className = "flex flex-col w-3/5 my-auto">
                <h1 className = "text-4xl text-blue-400 mx-auto mb-12 font-medium">Sign in to Ether Props</h1>
                <div className = "grid grid-col-1 mx-auto w-2/3 space-y-5">
                    <input name = "email" type = "email" placeholder = "Email" onChange = {changeHandler} className = "h-12 px-3 bg-gray-100"/>
                    <input name = "password" type = "password" placeholder = "Password" onChange = {changeHandler} className = "h-12 px-3 bg-gray-100" />
                    <Link to = "/reset-password" className = "border-b border-gray-400 place-self-center hover:text-blue-400 hover:border-blue-400">Forgot your password?</Link>
                </div>
                <button onClick = {signInHandler} className = "bg-blue-400 w-1/4 rounded-full mx-auto mt-8 py-3 text-white shadow hover:bg-blue-300">SIGN IN</button>
            </div>
            <animated.div className = "flex flex-col bg-blue-300 rounded-r-xl w-2/5">
                <Link to = "/"><img src="/assets/ether-props-logo.svg" alt="" className = "w-52 h-16 mx-auto mt-6"/></Link>
                <div className = "flex flex-col mx-auto my-auto items-center">
                    <h1 className = "text-5xl text-white font-medium">Join Us</h1>
                    <p className = "text-white my-8">Start your journey with us</p>
                    <button onClick = {signUpPageHandler} className = "border border-white w-40 rounded-full py-3 text-white transition transform duration-500 ease-in-out hover:-translate-y-2">SIGN UP</button>
                </div>
            </animated.div>
        </animated.div>
        
    );
}

export default SignIn;