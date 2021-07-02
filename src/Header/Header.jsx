import React, { Component } from 'react';
import { Link } from "react-router-dom";

import style from './Header.css';
import history from "../services/history";
import Logo from '../img/logo.svg';

export default class Header extends Component {
  state = {
    location: ""
  };

  componentDidMount = () => {
    this.setState({location: history.location.pathname})
    history.listen((location) => {
      this.setState({location: location.pathname})
    });
  }

  render() {
    let location = this.state.location;
    return (
      <div className={style.fullheader}>
        <div className={style.header}>
          <div className={style.logo}>
              <img src={Logo} alt="Logo" />
          </div>
          <div className={style.title}>Your Project Name</div>
          <div className={style.navigation}>
            <div>
              <Link className={style.item} style={{backgroundColor: location == "/Contact" ? " #f2f2f2" : ""}} to="/Contact"><span className="notranslate" translate="no">Contact</span></Link>
              <Link className={style.item} style={{backgroundColor: location == "/Name" ? " #f2f2f2" : ""}} to="/Name"><span className="notranslate" translate="no">Name</span></Link>
              <Link className={style.item} style={{backgroundColor: location == "/" ? " #f2f2f2" : ""}} to="/"><span className="notranslate" translate="no">Home</span></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
