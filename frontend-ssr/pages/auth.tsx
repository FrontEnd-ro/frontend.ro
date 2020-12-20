import React, { Component } from "react";
import Header from "../components/Header/";
import Footer from "../components/Footer/";
import LoginForm from "../components/login.ts/loginFormComponent";
// import styles from "./LoginPage.module.scss";
export default class Login extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <div className={styles["mere"]}> */}
          <LoginForm className="" />
        {/* </div> */}
        <Footer />
      </>
    );
  }
}
