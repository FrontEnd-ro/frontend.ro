<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React,{Component} from "react";
=======
import React,{Component} from "react";
// import store from 'Redux/store';
// import { loginUserSuccess } from 'Redux/user/user.actions';
// import AuthService from 'Services/Auth.service';
>>>>>>> 93cc1c0... For rebase
import PasswordReveal from "./passwordReveal";
import loginStyle from "./LoginPage.module.scss";
import formStyle from "./Form.module.scss";




const EMAIL_MISSING_ERROR="🧙‍ You shall not pass without an email!"
const EMAIL_TAKEN_ERROR="There is already an account under that email"
const USERNAME_MISSING_ERROR="🧙‍ You shall not pass without an username!"
const USERNAME_TAKEN_ERROR="The username is so cool that somebody else took it!"
const USERNAME_OR_EMAIL_ERROR="🧙‍ You shall not pass without using your username or email!"
const NAME_MISSING_ERROR="🧙‍ You shall not pass without a name!"

const URL = "http://localhost:3000";
interface MyProps {
  className?: string;
}

interface MyState {
  name:string,
  email:string,
  password:string,
  username:string,
  name_error:string|boolean,
  email_error:string| boolean;
  username_error:string| boolean;
  confirm_error:boolean;
  password_error:boolean;
  register:boolean;
  loading:boolean;
  confirm:boolean
}

class Login extends Component<MyProps, MyState> {
  public formRef = React.createRef<HTMLFormElement>();
  public timeoutId: any;
  constructor(props: MyProps) {
    super(props);

    this.state = {
      email:"",
      username:"",
      name:"",
      password:"",
      confirm:false,
      confirm_error:false,
      name_error:false,
      email_error:false,
      username_error:false,
      password_error:false,
      register:false,
      loading:false,
<<<<<<< HEAD
    };

    this.onChange=this.onChange.bind(this)
    this.clearServerError = this.clearServerError.bind(this);
    this.login = this.login.bind(this);
    // this.register = this.register.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.register_submit = this.register_submit.bind(this);
    this.login_submit = this.login_submit.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
=======
import React from 'react';

=======
import React from "react";
>>>>>>> 2f3a38f... Uncommited changes
// import store from 'Redux/store';
// import { loginUserSuccess } from 'Redux/user/user.actions';
// import AuthService from 'Services/Auth.service';
import PasswordReveal from "./passwordReveal";
import loginStyle from "~/styles/pages/login/LoginPage.module.scss";
import formStyle from "~/styles/pages/login/Form.module.scss";



const NAME_MISSING_ERROR="🧙‍ You shall not pass without an name!"
const EMAIL_MISSING_ERROR="🧙‍ You shall not pass without an email!"
const EMAIL_TAKEN_ERROR="There is already an account under that email"
const USERNAME_MISSING_ERROR="🧙‍ You shall not pass without an username!"
const USERNAME_TAKEN_ERROR="The username is so cool that somebody else took it!"
const USERNAME_OR_EMAIL_ERROR="🧙‍ You shall not pass without using your username or email!"

const URL = "http://localhost:3000";
interface MyProps {
  className?: string;
}

interface MyState {
  name_error:String| boolean;
  email_error:String| boolean;
  username_error:String| boolean;
  password_error:boolean;
  register:boolean;
  loading:boolean;
  reason:string;
}

class Login extends React.Component<MyProps, MyState> {
  public formRef = React.createRef<HTMLFormElement>();
  public timeoutId: any;
  constructor(props: MyProps) {
    super(props);

    this.state = {
      name_error:false,
      email_error:false,
      username_error:false,
      password_error:false,
      register:false,
      loading:false,
      reason:""
    
    };

    this.clearServerError = this.clearServerError.bind(this);
    this.login = this.login.bind(this);
    // this.register = this.register.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    // this.submit = this.submit.bind(this);
    this.register_submit = this.register_submit.bind(this);
    this.login_submit = this.login_submit.bind(this);
  }

  componentWillUnmount() {
<<<<<<< HEAD
    // clearTimeout(this.timeoutId);
>>>>>>> 8ebc8c2... Merge
=======
    clearTimeout(this.timeoutId);
>>>>>>> 2f3a38f... Uncommited changes
=======
import React from 'react';

=======
import React from "react";
>>>>>>> c8a07f9... Uncommited changes
// import store from 'Redux/store';
// import { loginUserSuccess } from 'Redux/user/user.actions';
// import AuthService from 'Services/Auth.service';
import PasswordReveal from "./passwordReveal";
import loginStyle from "~/styles/pages/login/LoginPage.module.scss";
import formStyle from "~/styles/pages/login/Form.module.scss";



const NAME_MISSING_ERROR="🧙‍ You shall not pass without an name!"
const EMAIL_MISSING_ERROR="🧙‍ You shall not pass without an email!"
const EMAIL_TAKEN_ERROR="There is already an account under that email"
const USERNAME_MISSING_ERROR="🧙‍ You shall not pass without an username!"
const USERNAME_TAKEN_ERROR="The username is so cool that somebody else took it!"
const USERNAME_OR_EMAIL_ERROR="🧙‍ You shall not pass without using your username or email!"

const URL = "http://localhost:3000";
interface MyProps {
  className?: string;
}

interface MyState {
  name_error:String| boolean;
  email_error:String| boolean;
  username_error:String| boolean;
  password_error:boolean;
  register:boolean;
  loading:boolean;
  reason:string;
}

class Login extends React.Component<MyProps, MyState> {
  public formRef = React.createRef<HTMLFormElement>();
  public timeoutId: any;
  constructor(props: MyProps) {
    super(props);

    this.state = {
      name_error:false,
      email_error:false,
      username_error:false,
      password_error:false,
      register:false,
      loading:false,
      reason:""
    
    };

=======
    };

    this.onChange=this.onChange.bind(this)
>>>>>>> 93cc1c0... For rebase
    this.clearServerError = this.clearServerError.bind(this);
    this.login = this.login.bind(this);
    // this.register = this.register.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
<<<<<<< HEAD
    // this.submit = this.submit.bind(this);
=======
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
>>>>>>> 93cc1c0... For rebase
    this.register_submit = this.register_submit.bind(this);
    this.login_submit = this.login_submit.bind(this);
  }

  componentWillUnmount() {
<<<<<<< HEAD
    // clearTimeout(this.timeoutId);
>>>>>>> 55eb138...  Change in front, look over the git review
=======
    clearTimeout(this.timeoutId);
>>>>>>> c8a07f9... Uncommited changes
  }

  clearServerError() {
    this.setState({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      password_error:false,
      username_error:false,
      email_error:false
=======
      reason: null,
<<<<<<< HEAD
>>>>>>> 8ebc8c2... Merge
=======
      password_error:false,
      username_error:false,
      email_error:false
>>>>>>> 2f3a38f... Uncommited changes
=======
      reason: null,
<<<<<<< HEAD
>>>>>>> 55eb138...  Change in front, look over the git review
=======
=======
>>>>>>> 93cc1c0... For rebase
      password_error:false,
      username_error:false,
      email_error:false
>>>>>>> c8a07f9... Uncommited changes
    });
  }

  login(data) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if ("preventDefault" in data) {
      data.preventDefault();
    }
    if (this.state.register) {
      this.setState({ register: false });
      this.clearServerError();
    } else {
      let errors = this.checkErrors();
      if (!errors) {
        // this.submit();
      }
    }
  }


  login_submit(e){
    e.preventDefault();
    if (this.state.register) {
      this.setState({ register: false });
      this.clearServerError();
    }
    else{
      let email: string = this.state.email;
      let password: string =this.state.password;
      let errors=this.checkErrors();
      if(errors){
        return
      }
      fetch("/api/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      })
      .then(resp=> resp.json())
      .then(data=>{
        // console.log(data);
        if(data.status==="success"){
          // this.setState({register:false})  
          
        }
        // if(data.status==="fail")
        // {
        //   console.log(data.errors)
        //   if(data.errors[0].email=== "Email already exists"){
        //     this.setState({email_error:EMAIL_TAKEN_ERROR})
        //   }
        // }
      })
      .catch(error=>{
        console.log(error)
      })
    }
=======
    if ('preventDefault' in data) {
=======
    if ("preventDefault" in data) {
>>>>>>> 2f3a38f... Uncommited changes
      data.preventDefault();
    }
    if (this.state.register) {
      this.setState({ register: false });
      this.clearServerError();
    } else {
      let errors = this.checkErrors();
      if (!errors) {
        // this.submit();
      }
    }
  }

<<<<<<< HEAD

  login_submit(e){
    e.preventDefault();
    if (this.state.register) {
      this.setState({ register: false });
      this.clearServerError();
    }
    else{
      let email: String = this.formRef.current[0].value;
      let password: String = this.formRef.current[2].value;
      console.log(email,password)
      let errors=this.checkErrors();
      if(errors){
        return
      }
      fetch("/api/user/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      })
      .then(resp=>resp.json())
      .then(data=>{
        console.log(data);
        if(data.status==="success"){
          // this.setState({register:false})  
          
        }
        // if(data.status==="fail")
        // {
        //   console.log(data.errors)
        //   if(data.errors[0].email=== "Email already exists"){
        //     this.setState({email_error:EMAIL_TAKEN_ERROR})
        //   }
        // }
      })
      .catch(error=>{
        console.log(error)
      })
    }
<<<<<<< HEAD
=======
    if ('preventDefault' in data) {
=======
    if ("preventDefault" in data) {
>>>>>>> c8a07f9... Uncommited changes
      data.preventDefault();
    }
    if (this.state.register) {
      this.setState({ register: false });
      this.clearServerError();
    } else {
      let errors = this.checkErrors();
      if (!errors) {
        // this.submit();
      }
    }
  }


  login_submit(e){
    e.preventDefault();
    if (this.state.register) {
      this.setState({ register: false });
      this.clearServerError();
    }
    else{
      let email: String = this.formRef.current[0].value;
      let password: String = this.formRef.current[2].value;
      console.log(email,password)
      let errors=this.checkErrors();
      if(errors){
        return
      }
      fetch("/api/user/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      })
      .then(resp=>resp.json())
      .then(data=>{
        console.log(data);
        if(data.status==="success"){
          // this.setState({register:false})  
          
        }
        // if(data.status==="fail")
        // {
        //   console.log(data.errors)
        //   if(data.errors[0].email=== "Email already exists"){
        //     this.setState({email_error:EMAIL_TAKEN_ERROR})
        //   }
        // }
      })
      .catch(error=>{
        console.log(error)
      })
    }
<<<<<<< HEAD
>>>>>>> 55eb138...  Change in front, look over the git review
    // const API_TO_CALL = type === 'LOGIN' ? AuthService.login : AuthService.register;

    this.setState({ loading: true });

    // API_TO_CALL(data)
    //   .then((resp) => {
    //     this.setState({ loading: false });
    //     // store.dispatch(loginUserSuccess(resp));

    //     // if (this.props.onSuccess) {
    //     //   this.props.onSuccess(type, resp);
    //     // }
    //     // if (this.props.closeModal) {
    //     //   this.props.closeModal(type, resp);
    //     // }
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       reason: err.reason,
    //       loading: false,
    //     });
    //   });
<<<<<<< HEAD
>>>>>>> 8ebc8c2... Merge
=======
>>>>>>> 2f3a38f... Uncommited changes
=======
>>>>>>> 55eb138...  Change in front, look over the git review
=======
>>>>>>> c8a07f9... Uncommited changes
  }

  onUsernameChange(e) {
    const username = e.target.value;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2f3a38f... Uncommited changes
=======
>>>>>>> c8a07f9... Uncommited changes
=======
  onUsernameChange(e) {
    const username = e.target.value;
>>>>>>> 93cc1c0... For rebase
    clearTimeout(this.timeoutId);
    if (username) {
      this.timeoutId = setTimeout(() => {
        this.setState({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 93cc1c0... For rebase
          username_error: false,
        });
        console.log("expire");
        fetch(`${URL}/api/users/check_username/${username}`)
<<<<<<< HEAD
=======
=======
>>>>>>> c8a07f9... Uncommited changes
          // usernameAvailability: "LOADING",
          username_error: false,
        });
        console.log("expire");
        fetch(`${URL}/api/user/check_username/${username}`)
<<<<<<< HEAD
>>>>>>> 2f3a38f... Uncommited changes
=======
>>>>>>> c8a07f9... Uncommited changes
=======
>>>>>>> 93cc1c0... For rebase
          .then((resp) => resp.json())
          .then((resp) => {
            console.log(resp);
            if (resp.status === "taken") {
              this.setState({
                username_error: USERNAME_TAKEN_ERROR,
              });
            }
            if (resp.status === "free") {
              this.setState({ username_error: false });
            }
          });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      }, 1500);
    }
  }

  checkErrors() {
    let errors=false;
    if(this.state.register){
      let email_error= this.state.email  ==="" ?EMAIL_MISSING_ERROR :false;
      let username_error= this.state.username  ===""? USERNAME_MISSING_ERROR :false;
      let password_error= this.state.password  ===""? true :false;
      let name_error=this.state.name===""? NAME_MISSING_ERROR : false
      let confirm_error=!this.state.confirm
      this.setState({
        email_error:email_error,
        username_error:username_error,
        password_error:password_error,
        name_error:name_error ,
        confirm_error:confirm_error
      })
      if(email_error||username_error||password_error||name_error){
        errors=true;
      }
    }
    else{
      let email_error= this.state.email  ==="" ?USERNAME_OR_EMAIL_ERROR :false;
      let password_error= this.state.password  ===""? true :false;
      this.setState({
        email_error:email_error,
        password_error:password_error
      })
      if(email_error||password_error)
      {errors=true;}
    }
    
    return errors
  }

  register_submit(e) {
    e.preventDefault();
    if (!this.state.register ) {
      this.setState({ register: true });
      this.clearServerError();
    } else {
    let name: string = this.state.name
    let email: string = this.state.email
    let username: string = this.state.username
    let password: string = this.state.password
    let confirm: boolean = this.state.confirm
    let errors=this.checkErrors();
    if(confirm===false || errors){
      return;
    }
    fetch("/api/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        username,
        password,
      }),
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data);
      if(data.status==="success"){
        this.setState({register:false})
      }
      if(data.status==="fail")
      {
        console.log(data.errors)
        if(data.errors[0].email=== "Email already exists"){
          this.setState({email_error:EMAIL_TAKEN_ERROR})
        }
      }
    })
    .catch(error=>{
      console.log(error)
    })
    }
  }
  onChange(e){
    // console.log(e.target.value,typeof(e.target.value))
    this.setState({...this.state,[e.target.name] : e.target.value})
    // console.log(this.state)
  }
  onChangeCheckbox(e){
    this.setState({confirm:e.target.checked})
    console.log(e.target.checked)
  }
  render() {
    const {
      name,
      email,
      password,
      username,
      confirm,
      name_error,
      email_error,
      username_error,
      password_error,
      confirm_error,
      register,
      loading,
    } = this.state;
    return (
      <div className={loginStyle["center"]}>
      <form
        ref={this.formRef}
        className={`${this.props.className || ""} 
        ${loginStyle["login-form"]} ${register ? loginStyle["login-form--register"] : ""}`}
        onSubmit={register ? this.register_submit : this.login_submit}
        onInput={this.clearServerError}>
        <label className={formStyle["form-control--text"]}>
          
          <span className={formStyle["label"]}>{register && "Name"}</span>
         
         {register && <input autoCapitalize="none" type="text" name="name" value={name} onChange={this.onChange}/>}
          
          <span className={formStyle["error"]}>
            {name_error}
          </span>
       
        </label>

        <label className={formStyle["form-control--text"]}>
          <span className={formStyle["label"]}>
            {register && "Email address"}
            {!register && "Email address or username"}
          </span>
          <input autoCapitalize="none" type="text" value={email} name="email" onChange={this.onChange}/>

          <span className={formStyle["error"]}>
            {/* Register error */}
            {register && email_error }
            {/* Login error*/}
            {!register && email_error}
          </span>
        </label>
        <div
          className={`${formStyle["form__group"]} ${loginStyle["show-on-register"]}`}>
=======
    // clearTimeout(this.timeoutId);
=======
      }, 500);
    }
  }
>>>>>>> 2f3a38f... Uncommited changes

  checkErrors() {
    let errors=false;
    if(this.state.register){
      let name_error= this.formRef.current[0].value ==="" ? NAME_MISSING_ERROR : false;
      let email_error= this.formRef.current[1].value  ==="" ?EMAIL_MISSING_ERROR :false;
      let username_error= this.formRef.current[2].value  ===""? USERNAME_MISSING_ERROR :false;
      let password_error= this.formRef.current[3].value  ===""? true :false;

      this.setState({
        name_error:name_error,
        email_error:email_error,
        username_error:username_error,
        password_error:password_error  
      })
      if(name_error||email_error||username_error||password_error)errors=true;
    }
    else{
      let email_error= this.formRef.current[0].value  ==="" ?USERNAME_OR_EMAIL_ERROR :false;
      let password_error= this.formRef.current[2].value  ===""? true :false;
      console.log(email_error,password_error,this.formRef.current[2])
      this.setState({
        email_error:email_error,
        password_error:password_error
      })
      if(email_error||password_error)errors=true;

    }
    
    return errors
  }

  register_submit(e) {
    e.preventDefault();
    if (!this.state.register ) {
      this.setState({ register: true });
      this.clearServerError();
    } else {

    let name: String = this.formRef.current[0].value;
    let email: String = this.formRef.current[1].value;
    let username: String = this.formRef.current[2].value;
    let password: String = this.formRef.current[3].value;
    let confirm: Boolean = this.formRef.current[4].value;
    let errors=this.checkErrors();
    // console.log(this.state)
    if(confirm===false || errors){
      return;
    }
    fetch("/api/user/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        username,
        password,
      }),
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data);
      if(data.status==="success"){
        this.setState({register:false})
      }
      if(data.status==="fail")
      {
        console.log(data.errors)
        if(data.errors[0].email=== "Email already exists"){
          this.setState({email_error:EMAIL_TAKEN_ERROR})
        }
      }
    })
    .catch(error=>{
      console.log(error)
    })
=======
    // clearTimeout(this.timeoutId);
=======
      }, 500);
=======
      }, 1500);
>>>>>>> 93cc1c0... For rebase
    }
  }
>>>>>>> c8a07f9... Uncommited changes

  checkErrors() {
    let errors=false;
    if(this.state.register){
<<<<<<< HEAD
      let name_error= this.formRef.current[0].value ==="" ? NAME_MISSING_ERROR : false;
      let email_error= this.formRef.current[1].value  ==="" ?EMAIL_MISSING_ERROR :false;
      let username_error= this.formRef.current[2].value  ===""? USERNAME_MISSING_ERROR :false;
      let password_error= this.formRef.current[3].value  ===""? true :false;

<<<<<<< HEAD
    if (username) {
    //   this.timeoutId = setTimeout(() => {
    //     this.setState({
    //       usernameAvailability: 'LOADING',
    //     });
    //     AuthService.checkUsernameAvailability(encodeURI(username))
    //       .then((resp) => {
    //         this.setState({
    //           usernameAvailability: false,
    //           usernameError: 'The username is so cool that somebody else took it!',
    //         });
    //       })
    //       .catch((err) => {
    //         this.setState({
    //           usernameAvailability: err.status === 404,
    //           usernameError: err.status === 404 ? '' : err.reason,
    //         });
    //       });
    //   }, 300);
>>>>>>> 55eb138...  Change in front, look over the git review
=======
      this.setState({
        name_error:name_error,
        email_error:email_error,
        username_error:username_error,
        password_error:password_error  
      })
      if(name_error||email_error||username_error||password_error)errors=true;
    }
    else{
      let email_error= this.formRef.current[0].value  ==="" ?USERNAME_OR_EMAIL_ERROR :false;
      let password_error= this.formRef.current[2].value  ===""? true :false;
      console.log(email_error,password_error,this.formRef.current[2])
=======
      let email_error= this.state.email  ==="" ?EMAIL_MISSING_ERROR :false;
      let username_error= this.state.username  ===""? USERNAME_MISSING_ERROR :false;
      let password_error= this.state.password  ===""? true :false;
      let name_error=this.state.name===""? NAME_MISSING_ERROR : false
      let confirm_error=!this.state.confirm
      this.setState({
        email_error:email_error,
        username_error:username_error,
        password_error:password_error,
        name_error:name_error ,
        confirm_error:confirm_error
      })
      if(email_error||username_error||password_error||name_error){
        errors=true;
      }
    }
    else{
      let email_error= this.state.email  ==="" ?USERNAME_OR_EMAIL_ERROR :false;
      let password_error= this.state.password  ===""? true :false;
>>>>>>> 93cc1c0... For rebase
      this.setState({
        email_error:email_error,
        password_error:password_error
      })
<<<<<<< HEAD
      if(email_error||password_error)errors=true;

=======
      if(email_error||password_error)
      {errors=true;}
>>>>>>> 93cc1c0... For rebase
    }
    
    return errors
  }

  register_submit(e) {
    e.preventDefault();
    if (!this.state.register ) {
      this.setState({ register: true });
      this.clearServerError();
    } else {
<<<<<<< HEAD

    let name: String = this.formRef.current[0].value;
    let email: String = this.formRef.current[1].value;
    let username: String = this.formRef.current[2].value;
    let password: String = this.formRef.current[3].value;
    let confirm: Boolean = this.formRef.current[4].value;
    let errors=this.checkErrors();
    // console.log(this.state)
    if(confirm===false || errors){
      return;
    }
    fetch("/api/user/register", {
=======
    let name: string = this.state.name
    let email: string = this.state.email
    let username: string = this.state.username
    let password: string = this.state.password
    let confirm: boolean = this.state.confirm
    let errors=this.checkErrors();
    if(confirm===false || errors){
      return;
    }
    fetch("/api/users/register", {
>>>>>>> 93cc1c0... For rebase
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        username,
        password,
      }),
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data);
      if(data.status==="success"){
        this.setState({register:false})
      }
      if(data.status==="fail")
      {
        console.log(data.errors)
        if(data.errors[0].email=== "Email already exists"){
          this.setState({email_error:EMAIL_TAKEN_ERROR})
        }
      }
    })
    .catch(error=>{
      console.log(error)
    })
>>>>>>> c8a07f9... Uncommited changes
    }
  }
<<<<<<< HEAD

  render() {
    const {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c8a07f9... Uncommited changes
=======
  onChange(e){
    // console.log(e.target.value,typeof(e.target.value))
    this.setState({...this.state,[e.target.name] : e.target.value})
    // console.log(this.state)
  }
  onChangeCheckbox(e){
    this.setState({confirm:e.target.checked})
    console.log(e.target.checked)
  }
  render() {
    const {
      name,
      email,
      password,
      username,
      confirm,
>>>>>>> 93cc1c0... For rebase
      name_error,
      email_error,
      username_error,
      password_error,
<<<<<<< HEAD
      register,
      loading,
      reason
    } = {
      ...this.state,
    };
    return (
      <form
        ref={this.formRef}
        className={`${this.props.className || ""} ${loginStyle["login-form"]} ${register ? loginStyle["login-form--register"] : ""}`}
        onSubmit={register ? this.register_submit : this.login_submit}
        onInput={this.clearServerError}>

=======
      confirm_error,
      register,
      loading,
    } = this.state;
    return (
      <div className={loginStyle["center"]}>
      <form
        ref={this.formRef}
        className={`${this.props.className || ""} 
        ${loginStyle["login-form"]} ${register ? loginStyle["login-form--register"] : ""}`}
        onSubmit={register ? this.register_submit : this.login_submit}
        onInput={this.clearServerError}>
>>>>>>> 93cc1c0... For rebase
        <label className={formStyle["form-control--text"]}>
          
          <span className={formStyle["label"]}>{register && "Name"}</span>
         
<<<<<<< HEAD
         {register && <input autoCapitalize="none" type="text" name="name" />}
=======
         {register && <input autoCapitalize="none" type="text" name="name" value={name} onChange={this.onChange}/>}
>>>>>>> 93cc1c0... For rebase
          
          <span className={formStyle["error"]}>
            {name_error}
          </span>
       
        </label>

<<<<<<< HEAD
        <label className={formStyle["form-control--text"]}>
          <span className={formStyle["label"]}>
            {register && "Email address"}
            {!register && "Email address or username"}
          </span>
<<<<<<< HEAD
          <input autoCapitalize="none" type="text" name="email" />

          <span className={formStyle["error"]}>
            {/* Register error */}
            {register && email_error }
            {/* Login error*/}
            {!register && email_error}
          </span>
        </label>
<<<<<<< HEAD
        <div className={formStyle["form__group"]+" "+loginStyle["show-on-register"]}>
>>>>>>> 8ebc8c2... Merge
=======
        <div
          className={`${formStyle["form__group"]} ${loginStyle["show-on-register"]}`}>
>>>>>>> 2f3a38f... Uncommited changes
=======
      loading, register, reason, usernameAvailability, usernameError,
    } = {...this.state};
    // console.log(loading, register, reason, usernameAvailability, usernameError)
    console.log(loginStyle,formStyle)
      return (
      <Form
        // ref={formRef}
        className={`${this.props.className || ''} ${loginStyle["login-form"]} ${register ? loginStyle['login-form--register'] : ''}`}
        onSubmit={register ? this.register : this.login}
        onInput={this.clearServerError}
      >
=======
>>>>>>> c8a07f9... Uncommited changes
        <label className={formStyle["form-control--text"]}>
          <span className={formStyle["label"]}>
            {register && "Email address"}
            {!register && "Email address or username"}
          </span>
          <input autoCapitalize="none" type="text" name="email" />
=======
          <input autoCapitalize="none" type="text" value={email} name="email" onChange={this.onChange}/>
>>>>>>> 93cc1c0... For rebase

          <span className={formStyle["error"]}>
            {/* Register error */}
            {register && email_error }
            {/* Login error*/}
            {!register && email_error}
          </span>
        </label>
<<<<<<< HEAD
        <div className={formStyle["form__group"]+" "+loginStyle["show-on-register"]}>
>>>>>>> 55eb138...  Change in front, look over the git review
=======
        <div
          className={`${formStyle["form__group"]} ${loginStyle["show-on-register"]}`}>
>>>>>>> c8a07f9... Uncommited changes
          <label className={formStyle["form-control--text"]}>
            <span className={formStyle["label"]}> Username </span>
            <input
              tabIndex={register ? 0 : -1}
              className={formStyle["form__input"]}
              type="text"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 93cc1c0... For rebase
              name="username"
              value={username}
              onChange={(e)=>{
                this.onUsernameChange(e);
                this.onChange(e);
              }
            }
            />
            {/* Register username error */}
            {register && ( <span className={formStyle["error"]}>{username_error}</span>) }

          </label>
=======
=======
>>>>>>> 55eb138...  Change in front, look over the git review
              required={register}
              onInput={this.onUsernameChange}
              name="username"
            />
            {usernameAvailability !== 'LOADING' && usernameError && <span className="error error--custom">{usernameError}</span>}

            {usernameAvailability === 'LOADING' && (
            <div className="input-icon loading-icon">
              <i className="icon-spinner" />
            </div>
            )}
            {usernameAvailability === true && (
            <div className={formStyle["input-icon"]+ " " +" ok-icon"}>
              <i className="icon-check" />
            </div>
            )}
            {reason ?<span className={formStyle["error"]}>🧙‍ You shall not pass without a username!</span>
          :null}</label>
<<<<<<< HEAD
>>>>>>> 8ebc8c2... Merge
=======
              onInput={this.onUsernameChange}
              name="username"
            />
=======
              onInput={this.onUsernameChange}
              name="username"
            />
>>>>>>> c8a07f9... Uncommited changes
            {/* Register username error */}
            {register && ( <span className={formStyle["error"]}>{username_error}</span>) }

          </label>
<<<<<<< HEAD
>>>>>>> 2f3a38f... Uncommited changes
=======
>>>>>>> 55eb138...  Change in front, look over the git review
=======
>>>>>>> c8a07f9... Uncommited changes
        </div>
        <div className={formStyle["form__group"]}>
          <label className={formStyle["form-control--text"]}>
            <span className={formStyle["label"]}> Password </span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 93cc1c0... For rebase
            <PasswordReveal value={password} password_error={password_error} onChange={this.onChange} />
          </label>
        </div>
        {/* {login_error ? (
          <span className={formStyle["error"]}>{login_error_message}</span>
        ) : null} */}
        {register ? (
          <label className={`${formStyle["form-control--checkbox"]} ${loginStyle["show-on-register"]} ${loginStyle["block"]} `}>
            <input type="checkbox" checked={confirm}  name="confirm" onChange={this.onChangeCheckbox}/>
<<<<<<< HEAD
            <span className={formStyle["control-indicator"]} />
            <span className={`${formStyle["control-message"]} ${!confirm_error && formStyle["error"]}
             `}>
              I have read and agree to the{" "}
              <a href="/privacy" className="link">
                Terms & Conditions
              </a>
            </span>
          </label>
        ) : null}
        <p className={`${formStyle["error"]} ${formStyle["error--custom"]}`}>
          {/* Fail login */}
          {/* {reason}Fail login or register  */}
        </p>
        <div className={`${loginStyle["form__controls"]} ${loginStyle["form__group"]}`}>
          <button
            type={register ? "button" : "submit"}
            className={`${loginStyle[`login-btn`]} ${loginStyle[`btn`]} login-btn btn ${register ? " btn--light" : "btn--blue"} ${loading && !register ? "btn--loading" : ""}`}
            disabled={loading}
            onClick={register ? this.login_submit : () => {}}
=======
            <PasswordReveal reason={reason}/>
=======
            <PasswordReveal password_error={password_error} />
>>>>>>> 2f3a38f... Uncommited changes
          </label>
        </div>
        {/* {login_error ? (
          <span className={formStyle["error"]}>{login_error_message}</span>
        ) : null} */}
        {register ? (
          <label className={`${formStyle["form-control--checkbox"]} ${loginStyle["show-on-register"]} ${loginStyle["block"]}`}>
            <input type="checkbox" required={register} />
            <span className={formStyle["control-indicator"]} />
            <span className={`${formStyle["control-message"]} ${formStyle["error"]}`}>
              I have read and agree to the{" "}
              <a href="/privacy" className="link">
                Terms & Conditions
              </a>
            </span>
          </label>
        ) : null}
        <p className={`${formStyle["error"]} ${formStyle["error--custom"]}`}>
          {/* Fail login */}
          {/* {reason}Fail login or register  */}
        </p>
        <div className={`${loginStyle["form__controls"]} ${loginStyle["form__group"]}`}>
          <button
            type={register ? "button" : "submit"}
            className={`${loginStyle[`login-btn`]} ${loginStyle[`btn`]} login-btn btn ${register ? " btn--light" : "btn--blue"} ${loading && !register ? "btn--loading" : ""}`}
            disabled={loading}
<<<<<<< HEAD
            onClick={register ? this.login : () => {}}
>>>>>>> 8ebc8c2... Merge
=======
            onClick={register ? this.login_submit : () => {}}
>>>>>>> 2f3a38f... Uncommited changes
=======
            <PasswordReveal reason={reason}/>
=======
            <PasswordReveal password_error={password_error} />
>>>>>>> c8a07f9... Uncommited changes
          </label>
        </div>
        {/* {login_error ? (
          <span className={formStyle["error"]}>{login_error_message}</span>
        ) : null} */}
        {register ? (
          <label className={`${formStyle["form-control--checkbox"]} ${loginStyle["show-on-register"]} ${loginStyle["block"]}`}>
            <input type="checkbox" required={register} />
            <span className={formStyle["control-indicator"]} />
            <span className={`${formStyle["control-message"]} ${formStyle["error"]}`}>
=======
            <span className={formStyle["control-indicator"]} />
            <span className={`${formStyle["control-message"]} ${!confirm_error && formStyle["error"]}
             `}>
>>>>>>> 93cc1c0... For rebase
              I have read and agree to the{" "}
              <a href="/privacy" className="link">
                Terms & Conditions
              </a>
            </span>
          </label>
        ) : null}
        <p className={`${formStyle["error"]} ${formStyle["error--custom"]}`}>
          {/* Fail login */}
          {/* {reason}Fail login or register  */}
        </p>
        <div className={`${loginStyle["form__controls"]} ${loginStyle["form__group"]}`}>
          <button
            type={register ? "button" : "submit"}
            className={`${loginStyle[`login-btn`]} ${loginStyle[`btn`]} login-btn btn ${register ? " btn--light" : "btn--blue"} ${loading && !register ? "btn--loading" : ""}`}
            disabled={loading}
<<<<<<< HEAD
            onClick={register ? this.login : () => {}}
>>>>>>> 55eb138...  Change in front, look over the git review
=======
            onClick={register ? this.login_submit : () => {}}
>>>>>>> c8a07f9... Uncommited changes
          >
            Sign in
          </button>
          <p className={formStyle["form__separator"]}> or </p>
          <button
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 93cc1c0... For rebase
            type={register ? "submit" : "button"}
            className={`${loginStyle[`register-btn`]} ${loginStyle[`btn`]} register-btn btn ${register ? "btn--blue" : "btn--light"} ${loading && register ? "btn--loading" : ""}`}
            disabled={loading}
            onClick={register ? () => {} : this.register_submit}>
            Register for free
          </button>

        </div>
      </form>
      </div>
<<<<<<< HEAD
=======
          style={{width:"100%"}}
            type={register ? 'submit' : 'button'}
            className={`register-btn btn ${register ? 'btn--blue' : 'btn--light'} ${loading && register ? 'btn--loading' : ''}`}
=======
          type={register ? "submit" : "button"}
            className={`${loginStyle[`register-btn`]} ${loginStyle[`btn`]} register-btn btn ${register ? "btn--blue" : "btn--light"} ${loading && register ? "btn--loading" : ""}`}
>>>>>>> 2f3a38f... Uncommited changes
            disabled={loading}
            onClick={register ? () => {} : this.register_submit}>
            Register for free
          </button>

        </div>
<<<<<<< HEAD
      </Form>
>>>>>>> 8ebc8c2... Merge
=======
      </form>
>>>>>>> 2f3a38f... Uncommited changes
=======
          style={{width:"100%"}}
            type={register ? 'submit' : 'button'}
            className={`register-btn btn ${register ? 'btn--blue' : 'btn--light'} ${loading && register ? 'btn--loading' : ''}`}
=======
          type={register ? "submit" : "button"}
            className={`${loginStyle[`register-btn`]} ${loginStyle[`btn`]} register-btn btn ${register ? "btn--blue" : "btn--light"} ${loading && register ? "btn--loading" : ""}`}
>>>>>>> c8a07f9... Uncommited changes
            disabled={loading}
            onClick={register ? () => {} : this.register_submit}>
            Register for free
          </button>

        </div>
<<<<<<< HEAD
      </Form>
>>>>>>> 55eb138...  Change in front, look over the git review
=======
      </form>
>>>>>>> c8a07f9... Uncommited changes
=======
>>>>>>> 93cc1c0... For rebase
    );
  }
}

export default Login;