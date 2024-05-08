
import './App.css';
import React, { useState } from 'react';
import styles from './App.module.css';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email", email)
        console.log("passs", pass)
        console.log("props", props)

    }

    return (
        <div className={styles.authFormContainer}>
            <h2>Login</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label htmlFor="email"><b>Email</b></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password"><b>Password</b></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {/* <button >Log In</button> */}
            </form>
            <button type="submit" onClick={() => { props.onFormSwitch('register'); console.log("heeee") }}>Don't have an account? Register here.</button>
            <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
            {/* <div className={styles.container}
                style={{backgroundColor:"#f1f1f1"}}
            >
                <button type="button" className={styles.cancelbtn}>Cancel</button>
                <span className={styles.psw}>Forgot <a href="#">password?</a></span>
            </div> */}
        </div>

        // <div>
        //     <form action="/action_page.php" method="post">


        //         <div className={styles.container}>
        //             <label for="uname"><b>Username</b></label>
        //             <input type="text" placeholder="Enter Username" name="uname" required/>

        //                 <label for="psw"><b>Password</b></label>
        //                 <input type="password" placeholder="Enter Password" name="psw" required/>

        //                     <button type="submit">Login</button>
        //                     <label>
        //                         <input type="checkbox" checked="checked" name="remember"/> Remember me
        //                     </label>
        //                 </div>

        //                 <div className={styles.container} 
        //                 // style="background-color:#f1f1f1"
        //                 >
        //                     <button type="button" className={styles.cancelbtn}>Cancel</button>
        //                     <span className={styles.psw}>Forgot <a href="#">password?</a></span>
        //                 </div>
        //             </form>
        //         </div>




    );


}


export default Login;
