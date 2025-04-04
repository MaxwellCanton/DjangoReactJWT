import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import store from './store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BodyComponent from './components/BodyComponent';
import HeaderComponent from "./components/HeaderComponent";
import { FooterComponent } from './components/FooterComponent';
import ProyectosComponent from "./components/ProyectosComponent";
import ClientesComponent from "./components/ClientesComponent";
import DetalleClienteComponent from "./components/DetalleClienteComponent";
import ActualizarClienteComponent from "./components/ActualizarClienteComponent";

function App() {
    return (
        <ChakraProvider >
          <Provider store={store}>
            <div className='App'>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<BodyComponent/>}/>
                    <Route path="/proyectos/api" element={<ProyectosComponent/>}/>
                    <Route path="/clientes/api" element={<ClientesComponent/>}/>
                    <Route path="/clientes/api/:id" element={<DetalleClienteComponent />}/>
                    <Route path="/clientes/api/actualizar/:id" element={<ActualizarClienteComponent/>}/>
                </Routes>
                <FooterComponent/>
            </div>
          </Provider>
        </ChakraProvider>
    );

}

export default App;
