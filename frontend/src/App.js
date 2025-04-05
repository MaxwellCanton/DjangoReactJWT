import React, { useState, useEffect} from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import store from './store'
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import BodyComponent from './components/BodyComponent';
import HeaderComponent from "./components/HeaderComponent";
import { FooterComponent } from './components/FooterComponent';
import ProyectosComponent from "./components/ProyectosComponent";
import ClientesComponent from "./components/ClientesComponent";
import DetalleClienteComponent from "./components/DetalleClienteComponent";
import ActualizarClienteComponent from "./components/ActualizarClienteComponent";
import {LoginComponent} from "./components/LoginComponent";
import {LogoutComponent} from "./components/LogoutComponent";
import {CreateClienteComponent} from "./components/CreateClienteComponent";
import {RegisterComponent} from "./components/RegisterComponent";
import DetalleProyectoComponent from "./components/DetalleProyectoComponent";
import ActualizarProyectoComponent from "./components/ActualizarProyectoComponent";
import CreateProyectoComponent from "./components/CreateProyectoComponent";
import ProyectosPorEstadosComponent from "./components/ProyectosPorEstadosComponent";
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.withCredentials = true;

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isVisible, setIsVisible] = useState("block");
    useEffect(() => {
        if(localStorage.getItem('access_token') === null){
            setIsAuth(false)
        }else{
            setIsAuth(true)
        }
     }, []);

    return (
        <ChakraProvider >
          <Provider store={store}>
            <div className='App'>
                <HeaderComponent isAuth={isAuth} setIsAuth={setIsAuth} isVisible={isVisible}/>
                <Routes>
                    <Route path="/" element={<BodyComponent/>}/>
                    <Route path="/app/api/login" element={<LoginComponent setIsAuth={setIsAuth}/>}/>
                    <Route path="/app/api/logout" element={<LogoutComponent setIsAuth={setIsAuth}/>}/>
                    <Route path="/app/api/register" element={<RegisterComponent/>}/>

                    <Route path="/proyectos/api" element={<ProyectosComponent setIsVisible={setIsVisible}/>}/>
                    <Route path="/proyectos/api/:id" element={<DetalleProyectoComponent />}/>
                    <Route path="/proyectos/api/proyectos_estados/:str" element={<ProyectosPorEstadosComponent setIsVisible={setIsVisible}/>}/>
                    <Route path="/proyectos/api/actualizar/:id" element={<ActualizarProyectoComponent/>}/>
                    <Route path="/app/api/create/proyecto" element={<CreateProyectoComponent isAuth={isAuth}/>}/>


                    <Route path="/clientes/api" element={<ClientesComponent setIsVisible={setIsVisible}/>}/>
                    <Route path="/clientes/api/:id" element={<DetalleClienteComponent />}/>
                    <Route path="/clientes/api/actualizar/:id" element={<ActualizarClienteComponent/>}/>
                    <Route path="/app/api/create/cliente" element={<CreateClienteComponent isAuth={isAuth}/>}/>
                </Routes>
                <FooterComponent/>
            </div>
          </Provider>
        </ChakraProvider>
    );

}

export default App;
