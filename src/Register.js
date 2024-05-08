import React, { useState } from "react";
import styles from './App.module.css';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className={styles.authFormContainer}>
            <h2>Register</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <label htmlFor="name"><b>Full name</b></label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email"><b>Email</b></label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password"><b>Password</b></label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            {/* <button type="submit">Log In</button> */}
        </form>
        <button type="submit" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}