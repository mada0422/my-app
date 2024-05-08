import './App.css';
import React, { useState } from 'react';
import styles from './App.module.css';
import logo from './images/slogan.JPG';
import Login from './Login';
import { Register } from './Register';

function Intro () {

  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
    console.log(currentForm)
  }
  
    return (
      <div>
        <div className={styles.logoBar} style={{backgroundColor:"aliceblue"}}>
          <div className={styles.container}>
            <img src={logo} className={styles.logoImage} />
            <p style={{
              textDecoration: "overline",
              textTransform: "uppercase",
              fontSize: "20px"
            }}>* House of beauty *</p>
          </div>
        </div>
        <div>
          <div>

            <ul className={styles.ulDes}>
              <li className={styles.liDes}>Home</li>
              <li className={styles.liDes}>Service</li>
              <li className={styles.liDes}>Price</li>
              <li className={styles.liDes}> Careers</li>
              <li className={styles.liDes}>Contacte</li>

            </ul>

          
          </div>
          <div>
          {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
          </div>

        </div>

      </div>





    );
  }


export default Intro;