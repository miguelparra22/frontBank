import React, { Component } from 'react'
import Nav from './navBar';

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        mostrarCorreo()
    }
  };

function mostrarCorreo(){
    document.getElementById("email").innerHTML = localStorage.email;
}



export default class principal extends Component {
    render() {
        return (
            <div>
                <Nav />


                <section>

                    <h1>Bienvenido</h1>
                    <h2>Su saldo actual es: <p class="email"></p> </h2>
                    <div class="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Número de cuenta</th>
                                    <th>Saldo</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td>AAC</td>
                                    <td>AUSTRALIAN COMPANY </td>
                                    <td>$1.38</td>
                                    <td>+2.01</td>
                                    <td>-0.36%</td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </section>



                

            </div>
        )
    }
}
