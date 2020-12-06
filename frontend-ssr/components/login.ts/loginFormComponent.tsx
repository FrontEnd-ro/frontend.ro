import React,{Component} from "react";
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
  }

  clearServerError() {
    this.setState({
      password_error:false,
      username_error:false,
      email_error:false
    });
  }

  login(data) {
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
  }

  onUsernameChange(e) {
    const username = e.target.value;
    clearTimeout(this.timeoutId);
    if (username) {
      this.timeoutId = setTimeout(() => {
        this.setState({
          username_error: false,
        });
        console.log("expire");
        fetch(`${URL}/api/users/check_username/${username}`)
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
          <label className={formStyle["form-control--text"]}>
            <span className={formStyle["label"]}> Username </span>
            <input
              tabIndex={register ? 0 : -1}
              className={formStyle["form__input"]}
              type="text"
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
        </div>
        <div className={formStyle["form__group"]}>
          <label className={formStyle["form-control--text"]}>
            <span className={formStyle["label"]}> Password </span>
            <PasswordReveal value={password} password_error={password_error} onChange={this.onChange} />
          </label>
        </div>
        {/* {login_error ? (
          <span className={formStyle["error"]}>{login_error_message}</span>
        ) : null} */}
        {register ? (
          <label className={`${formStyle["form-control--checkbox"]} ${loginStyle["show-on-register"]} ${loginStyle["block"]} `}>
            <input type="checkbox" checked={confirm}  name="confirm" onChange={this.onChangeCheckbox}/>
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
          >
            Sign in
          </button>
          <p className={formStyle["form__separator"]}> or </p>
          <button
            type={register ? "submit" : "button"}
            className={`${loginStyle[`register-btn`]} ${loginStyle[`btn`]} register-btn btn ${register ? "btn--blue" : "btn--light"} ${loading && register ? "btn--loading" : ""}`}
            disabled={loading}
            onClick={register ? () => {} : this.register_submit}>
            Register for free
          </button>

        </div>
      </form>
      </div>
    );
  }
}

export default Login;
