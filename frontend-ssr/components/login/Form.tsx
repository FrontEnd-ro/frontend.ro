import React from 'react';
import { promises } from 'fs';

interface MyProps{
    onInput:(e:any)=>void;
    onSubmit:(data:any)=>any;
    autoComplete:string;
    className?:string;
}

export default class Form extends React.Component<MyProps,{submitted:boolean;}> {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.persist();

    this.setState({
      submitted: true,
    });

    if (e.target.checkValidity()) {
      let data = {};
      let elements = [];

      try {
        elements = [...e.target.elements];
      } catch (err) {
        // MSEdge fix
        for (let i = 0; i < e.target.elements.length; i++) {
          elements.push(e.target.elements[i]);
        }
      }

      elements
        .filter((el) => el.name)
        .forEach((el) => {
          if (el.hasOwnProperty('checked')) {
            data[el.name] = el.checked;
          } else {
            data[el.name] = el.value;
          }
        });

      let submitPromise = this.props.onSubmit(data);
      if (submitPromise instanceof Promise) {
        submitPromise
          .then(() => {
            this.setState({
              submitted: false,
            });
            e.target.reset();
          })
          .catch((err) => console.error(err));
      }
    }
  }

  onInput(e) {
    if (typeof this.props.onInput === 'function') {
      this.props.onInput(e.target);
    }
  }

  render() {
    const { submitted } = this.state;
    let autoComplete = 'on';

    if ('autoComplete' in this.props) {
      autoComplete = this.props.autoComplete;
    }

    return (
      <form
        className={`form ${submitted ? 'form--submitted' : ''} ${this.props.className || ''}`}
        spellCheck="false"
        onSubmit={this.onSubmit}
        onInput={this.onInput}
        noValidate
        autoCorrect="off"
        autoComplete={autoComplete}
      >
        {this.props.children}
      </form>
    );
  }
}
