import './App.css';
import React, { useState } from 'react';
import styles from './App.module.css';
import logo from './images/slogan.JPG';
import Login from './Login';
import { Register } from './Register';

function FirstPage() {

    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
        console.log(currentForm)
    }

    return (




        <div>
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>








    );
}


export default FirstPage;