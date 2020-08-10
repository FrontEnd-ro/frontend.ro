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
}
