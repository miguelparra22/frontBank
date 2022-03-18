import React, { Component } from 'react'
import '../Styles/register.css'



async function registrarUsuarios(){

  let datos ={};
  datos.id_usuario = document.getElementById("cedulaTxt").value;
  datos.nombre = document.getElementById("nombreTxt").value;
  datos.apellido = document.getElementById("apellidoText").value;
  datos.email = document.getElementById("emailTxt").value;
  datos.password = document.getElementById("passwordTxt").value;
  /*let repetirPassword = document.getElementById("txtRepeatPassword").value*/

  const request = await fetch('http://localhost:8080/api/registroUsuario', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  
    registrarCuenta();

  
   alert("Usuario creado correctamente");
   document.onload();

  
 
}


async function registrarCuenta(){
  
  let date = new Date();
  //let creacionCuentaId = String(date.getDate()).padStart(2, '0')  + String(date.getMonth()  + date.getFullYear());
  let creacionCuentaId = String(date.getMonth()  + date.getFullYear());
  let usuario = document.getElementById("cedulaTxt").value;
  
  let datos2 ={};
  datos2.id_cuenta = creacionCuentaId+usuario;
  datos2.id_usuario_cuenta = usuario;
  datos2.saldo = document.getElementById("SaldoTxt").value;

  
   console.log(datos2)

  const request = await fetch('http://localhost:8080/api/registroCuenta', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos2)
  });
  
}


export default class registro extends Component {

  render() {
    return (
      <div className='contenedorRegistro'>
        <div className='header'>
          <h2 className='animation a1'>Registro</h2>
        </div>

        <div className="formR a2">
          <input id="cedulaTxt" type="text" className='formR-field animation a3' placeholder="Ingresa tu cedula" />
          <input id="nombreTxt" type="text" className='formR-field animation a3' placeholder="Ingresa tu nombre" />
          <input id="apellidoText" type="text" className='formR-field animation a3' placeholder="Ingresa tu apellido" />
          <input id="emailTxt" type="text" className='formR-field animation a3' placeholder="Ingresa tu email" />
          <input id="passwordTxt" type="password" className='formR-field animation a4' placeholder="Ingresa tu password" />
          <input id="SaldoTxt" type ="text" className='formR-field animation a4' placeholder='Ingrese un saldo inicial' />

         

          <button className='animation a6' onClick={() => registrarUsuarios()}>Registrarse</button>
          </div>
        </div>
        )
  }
}



