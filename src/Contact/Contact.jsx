import React, { Component } from "react";
import queryString from 'query-string';
import autosize from "autosize";

import style from "./Contact.css";
import Loader from '../img/loader.svg';


export default class Contact extends Component {
  state = {
    subject: "",
    email: "",
    name: "",
    message: "",
    loader: false,
    valided: false
  };

  componentDidMount = () => {
    let params = queryString.parse(this.props.location.search);
    if (params.subject) {
      this.setState({subject: params.subject});
    }
    autosize(this.textarea);
  }

  onChangeSubject = (e) => {
    console.log("Le sujet à changer! Nouveau : " + e.target.value);
    if (e.target.value.length !== 0) {
      this.setState({subject: e.target.value, valided: false});
      history.replaceState(null, null, window.location.pathname+'?subject='+e.target.value);
    } else {
      this.setState({subject: "", valided: false});
      history.replaceState(null, null,  window.location.pathname);
    }
  }

  onChangeName = (e) => {
    console.log("Le nom à changer! Nouveau : " + e.target.value);
    this.setState({name: e.target.value, valided: false});
  }

  onChangeMessage = (e) => {
    console.log("Le message à changer! Nouveau : " + e.target.value);
    if (e.target.value.length !== 0) {
      this.setState({message: e.target.value, valided: false});
    } else {
      this.setState({message: e.target.value, valided: false});
    }
  }

  onChangeEmail = (e) => {
    console.log("L'email à changer! Nouveau : " + e.target.value);
    if (e.target.value.length !== 0) {
      if(/^[\w\.@+\-!#$%&'*+-/=?^_`{|}~"(),:;<>@[\]]+$/.test(e.target.value)) {
        this.setState({email: e.target.value, valided: false});
      }
    } else {
      this.setState({email: e.target.value, valided: false});
    }
  }

  onClickSubmit = () => {
    console.log("Tu à cliquer sur submit ! (On laisse le loader 3 seconde)");
    this.setState({loader: true});
    setTimeout(() => {
      this.setState({loader: false, valided: true});
    }, 3000);
  }

  render() {
    return (
      <div className={style.fullcheck}>
        <div className={style.outer}>
          <div className={style.titleSubject}>Subject</div>
          <input className={style.subjectinput}
                 onChange={this.onChangeSubject}
                 type="text"
                 id="subject"
                 name="subject"
                 placeholder="Hello world"
                 value={this.state.subject}
                 disabled={(this.state.loader)? "disabled" : ""}/>
          <div className={style.titleEmail}>Email Address</div>
          <input className={style.emailinput}
                 onChange={this.onChangeEmail}
                 type="text"
                 id="email"
                 name="email"
                 placeholder="user@domain.tld"
                 value={this.state.email}
                 disabled={(this.state.loader)? "disabled" : ""}/>
          <div className={style.titleName}>Name / Company</div>
          <input className={style.nameinput}
                 onChange={this.onChangeName}
                 type="text"
                 id="name"
                 name="name"
                 placeholder="Barack Afritt"
                 value={this.state.name}
                 disabled={(this.state.loader)? "disabled" : ""}/>
          <div className={style.titleMSG}>Message</div>
          <textarea className={style.messageinput}
                    type="text"
                    id="msg"
                    name="msg"
                    placeholder="Dit moi tous ce que tu veux BG"
                    value={this.state.message}
                    onChange={this.onChangeMessage}
                    ref={c => (this.textarea = c)}
                    disabled={(this.state.loader)? "disabled" : ""}/>
          <div className={style.outerbutton}>
            <button className={style.buttonsubmit}
                    onClick={this.onClickSubmit}
                    type="button"
                    style={this.state.valided ? {backgroundColor: "#009705", color: "#fff", cursor: "default"} : {}}>
            {!this.state.loader ?
              <>
              {this.state.valided ?
                  <>Demande envoyé.</>
                :
                  <>Envoyez ma demande.</>
              }
              </>
              :
              <><img src={Loader} alt="Loader animation" /></>
            }
            </button>
          </div>
        </div>
      </div>
    );
  }
}
