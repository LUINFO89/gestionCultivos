import React from "react";
import { Link} from "react-router-dom";

export function Login() {
    return (

        <div className="container align-items-center vh-100">
            <div className="row justify-content-md-center align-items-center">
                <div className="bg-green" style={{padding : '30px 20px' , border: '15px', width: '400px' }}>
                    <div>
                        <img className="container-fluid w-75 h-auto mb-2 mx-auto d-block" src="/img/logo.svg" alt="logo cultivos la planicie" />
                    </div>
                    <hr className="border border-white"/>
                    {/* <!--- Formulario de inicio de sesión---> */}
                    <div className ="card-body">
                    <form className ="login-focus">
                    <div className ="mb-3">
                    <label for="email" className ="form-label text-white">Correo Electrónico</label>
                    <input type ="email" className ="form-control " id="email" placeholder="name@cultivoslaplanicie.com" />
                    </div>

                    <div className ="mb-3">
                    <label for="password" className ="form-label text-white">Contraseña</label>
                    <span className ="icon-eye"><i className ="fas fa-eye-slash"></i></span>
                    <input type ="password" className ="form-control" id="password" placeholder="Contraseña" />
                    </div>

                    <div className ="d-grid gap-2 col-6 mx-auto mt-4">
                    <button className ="btn-orange" type ="submit">Ingresar</button>
                    </div>
                    
                    </form>
                    </div>
                    {/* <!--- fin formulario inicio de sesión---> */}
                </div>
            </div>
        </div>


    )
}