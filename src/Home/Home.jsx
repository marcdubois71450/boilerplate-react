import React, { Component } from "react";

import style from "./Home.css";
import history from "../services/history";

export default class Home extends Component {

  onClickCheck = () => {
    history.push('/Name');
  }

  onClickForm = () => {
    history.push('/Contact');
  }

  render() {
    return (
        <div className={style.fullhome}>
          <div className={style.outer}>
            <p className={style.title}>What is your project?</p>
            <p className={style.explained}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span onClick={this.onClickCheck} className={style.linked}>this tool</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className={style.title}>What is the color of henri 4's white horse?</p>
            <p className={style.explained}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p className={style.title}>End now?</p>
            <p className={style.explained}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum <span onClick={this.onClickForm} className={style.linked}>our form</span> iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </div>
    );
  }
}
