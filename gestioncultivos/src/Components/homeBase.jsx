import React from "react";
import { Link } from "react-router-dom";

export function HomeBase() {


    return (
        <div className
            ="container-fluid">
            <div className
                ="row">
                {/* <!--Menú de navegación --> */}

                <nav className
                    ="col-lg-3 navBar bg-green vh-100 position-fixed p-lg-3">
                    <img src="img/logo.svg" alt="logo" className
                        ="img-fluid mx-auto d-block w-50 mt-lg-2 mb-lg-4"/>
                        <hr className
                            ="border border-white"/>
                            <ul className
                                ="nav flex-column">
                                <li className
                                    ="nav-item " >
                                    <Link to="/" className
                                        ="nav-link ">
                                            <i className
                                            ="fas fa-home">  </i>
                                            inicio</Link>
                                   
                                </li>
                                <li className
                                    ="nav-item">
                                    <a className
                                        ="nav-link" href="accion1.html">
                                        <i className
                                            ="fas fa-user-circle"></i> {/* <!-- Camnbiar icono en Font Awason --> */}

                                        Acción 1
                                    </a>
                                </li>
                                <li className
                                    ="nav-item">
                                    <a className
                                        ="nav-link" href="#">
                                        <i className
                                            ="fas fa-tasks"></i>{/* <!--Camnbiar icono en Font Awason --> */}

                                        Acción 2
                                    </a>
                                </li>
                                <li className
                                    ="nav-item">
                                    <a className
                                        ="nav-link" href="#">
                                        <i className
                                            ="fas fa-user-cog"></i>{/* <!--Camnbiar icono en Font Awason --> */}

                                        Acción 3
                                    </a>
                                </li>
                                <li className
                                    ="nav-item">
                                    <a className
                                        ="nav-link" href="#">
                                        <i className
                                            ="fas fa-user-cog"></i>{/* <!--Camnbiar icono en Font Awason --> */}

                                        Acción 4
                                    </a>
                                </li>
                                <li className
                                    ="nav-item">
                                    <a className
                                        ="nav-link" href="#">
                                        <i className
                                            ="fas fa-user-cog"></i>{/* <!--Camnbiar icono en Font Awason --> */}

                                        Acción 5
                                    </a>
                                </li>
                            </ul>
                            <hr className
                                ="border border-white"/>

                            </nav>
                            {/* <!--Fin menú de navegación --> */}


                            {/* <!--Cabecera de la página --> */}

                            <header className
                                ="col-lg-9 text-white p-0 fixed-top " style={{marginInline: '25%'}}>
                                <div className
                                    ="header-content bg-green ms-lg-3 p-lg-2 text-end">
                                    <div className
                                        ="me-lg-5 ">
                                        <span className
                                            ="me-lg-2 fs-5">name@cultivoslaplanicie.com</span>
                                        <a className
                                            ="icon-session" href="login.html">
                                            <i className
                                                ="fas fa-power-off"></i>
                                            Cerrar Sesión
                                        </a>
                                    </div>
                                </div>
                            </header>
                            {/* <!--Fin Cabecera de la página --> */}


                            <main className
                                ="col-lg-9 mt-lg-5  p-lg-0" style={{marginInline: '25%'}} >
                                <div className
                                    ="m-lg-3 mt-lg-0 ">
                                    <img style={{width:'100%', height: '300px'}} src="/img/homeBanner.webp" className
                                        ="img-fluid" alt="home banner"/>
                                        <div>
                                            <div className
                                                ="row p-lg-5">
                                                <div className
                                                    ="col-4">
                                                    <div className
                                                        ="card-home">
                                                        <div className
                                                            ="card-body text-center fs-4">
                                                            <h4 className
                                                                ="card-title fw-bold fs-1 ">50.000</h4>
                                                            <p className
                                                                ="card-text">Semillas Sembradas</p>
                                                            <img style={{width: '100%', height: '136px'}} src="/img/flower.webp" className
                                                                ="img-fluid" alt="Semillas Sembradas"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className
                                                    ="col-4">
                                                    <div className
                                                        ="card-home">
                                                        <div className
                                                            ="card-body text-center fs-4">
                                                            <h4 className
                                                                ="card-title fw-bold fs-1 ">2.300</h4>
                                                            <p className
                                                                ="card-text">Clientes Felices</p>
                                                            <img style={{width: '100%', height: '136px'}} src="/img/smile.webp" className
                                                                ="img-fluid" alt="Clientes Felices"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className
                                                    ="col-4">
                                                    <div className
                                                        ="card-home">
                                                        <div className
                                                            ="card-body text-center fs-4">
                                                            <h4 className
                                                                ="card-title fw-bold fs-1">1.250</h4>
                                                            <p className
                                                                ="card-text">Empleos Generados</p>
                                                            <img style={{width: '100%', height: '136px'}} src="/img/job.webp" className
                                                                ="img-fluid" alt="Empleos Generados"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   
                                </div>
                            </main>
                        </div>

                    </div>
    )
}