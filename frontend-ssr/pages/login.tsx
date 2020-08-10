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

interface MyProps{}
interface MyState{
    register:boolean;
    username:string;
    loading:boolean;
    usernameAvailability:undefined|string|boolean;
}
export default class login extends Component<MyProps,MyState> {
    render() {
        return (
            <div className="center">
                <form>
                    <span className="">Username</span>
                    <input type="text"  />
                    <br/>
                    <span className="">Password</span>
                    <input type="password"/>
                    {}
                </form>
            </div>
        )
    }
>>>>>>> 03137ef...  Adding routes for login, register, check and a middleware to check the jwt token
}
