import React, { Component } from "react";
import style from "./Name.css";

export default class Name extends Component {
  state = {
    name: ""
  };

  onChangeName = (e) => {
    console.log("Le name a changé ! Voici le nouveaux : " + e.target.value);
    this.setState({name: e.target.value});
  }

  onClickButton = () => {
    console.log("On click button");
    alert("Le nom actuel est : " + this.state.name)
  }

  render() {
    return (
      <div className={style.fullname}>
        <div className={style.outer}>
          <div>
            <div className={style.item}>
              <div className={style.title}>Name</div>
              <input className={style.nameinput} onChange={this.onChangeName} type="text" id="name" name="name" placeholder="Michel" value={this.state.name}/>
            </div>
            <div className={style.item}>
              <button className={style.buttonname} onClick={this.onClickButton} type="button">Button</button>
            </div>
          </div>
          {this.state.name !== "" &&
            <div className={style.displayname}>Nom actuel en live : {this.state.name}</div>
          }
        </div>
      </div>
    );
  }
}
