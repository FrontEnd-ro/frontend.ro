<<<<<<< HEAD
import React, { Component } from "react";
import Header from "../components/header/Header.component";
import Footer from "../components/footer/Footer.component";
import LoginForm from "../components/login.ts/loginFormComponent";
import styles from "~/styles/pages/login/LoginPage.module.scss";
export default class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles["mere"]}>
          <LoginForm className="" />
        </div>
        <Footer />
      </>
    );
  }
=======
import React, { Component } from 'react'
import Header from '../components/header/Header.component'
import Footer from '../components/footer/Footer.component'
import LoginForm from '../components/login.ts/loginFormComponent'
import styles from '~/styles/pages/login/LoginPage.module.scss'
export default class Login extends Component {
    render() {
        return (
            <>
            <Header/>
            <div className={styles["mere"]}>

            <LoginForm className=""/>
            </div>
            <Footer/>
            </>
        )
    }
>>>>>>> 03137ef...  Adding routes for login, register, check and a middleware to check the jwt token
}
