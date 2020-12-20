import React, { Component } from 'react'
interface MyProps{
    className:string;
    onSubmit:any;
    onInput:any;
    ref?:any;
    children:any;
}
export default class Form extends Component<MyProps> {
    render() {
        return (
            <form className={this.props.className}> 
                {this.props.children}
            </form>
        )
    }
}
