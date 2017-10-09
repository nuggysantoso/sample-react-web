import React, { Component } from 'react';
import './MainMenu.css';
// import image from 'img/background_main_menu.jpg'; 

class MainMenu extends Component {

render() {
    return (
    	<div className="sample">
          <div className="logo">
            <img src="./img/NgudiUtomo.png"  className="Logo-Ngudiutomo"/>
          </div>
          <div className="content">
            <h1>Menu Utama</h1>
          </div>
    	</div>
    );
  }
}

export default MainMenu;