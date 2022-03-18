import React, { Component } from 'react'
import '../Styles/navBar.css';
import '../Styles/table.css';


export default class navBar extends Component {
  render() {
    return (
        <div className='nav'>
        <input type="checkbox" id="nav-check" />
        <div className='nav-header'>
          <div className='nav-title'>
            MonkeyBank

            <img src='./logo.svg' width={30} height={30}></img>
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <a href="//github.io/jo_geek" target="_blank">Consignaciones</a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">Retiros</a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Salir</a>
        </div>
      </div>
    )
  }
}
