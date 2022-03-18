

 import React from 'react';
import '../Styles/login.css';
import principal from './principal';
import { withRouter } from 'react-router-dom';
 

  

async function iniciarSesion(){

  let datos ={};
  datos.email = document.getElementById("emailTxt").value;
  datos.password = document.getElementById("passwordTxt").value;

  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
    
  });

  const respuesta = await request.text();

  
  console.log(respuesta);

  if(respuesta != "fail"){
       localStorage.token = respuesta;
       localStorage.email = datos.email;
       window.location = "/principal"
       
      
  }else{
    alert("las credenciales son incorrectas.")
  }

}




const Login = () => {
  {
    return (
      

        
        <div  className='container'>
        <div className='left'>
          <div className='header'>
            
            <h2 className='animation a1'>Bienvenidos</h2>
            <h4 className='animation a2'>Ingresa tu clave y contraseña</h4>
          </div>
          <div className="form">
            <input id="emailTxt" type="email" className='form-field animation a3' placeholder="Email Address" />
              <input id="passwordTxt" type="password" className='form-field animation a4' placeholder="Password" />
               
                <button className='animation a6' onClick={()=> iniciarSesion()}>Ingresar</button>
              </div>
          </div>
          <div className="rightLogin"></div>
        </div>
    )
  }
}


export default Login;