import React from 'react';
import {Button, Select} from '@chakra-ui/react';
import { Link, useLocation  } from 'react-router-dom'
import styles from "../styles/HeaderComponent.module.css";
import {estados} from "../variables";
import { useNavigate } from 'react-router-dom';

export function HeaderComponent({isAuth, setIsAuth, isVisible}){

    const location = useLocation();
    const isProyectosPage = location.pathname.includes('proyectos');
    const isClientesPage = location.pathname.includes('clientes');
    const navigate = useNavigate();

    const handleChange = event => {
        var value = event.target.value
        console.log(value)
        if(value != ""){navigate(`/proyectos/api/proyectos_estados/${value}`)}
    };


    return (
        <div className="header" style={{display:"flex"}}>

            <div id={styles["select-categories-box-sup"]}>
                <div  id={styles["select-categories-box-one"]}>
                    <Button id={styles["button_proyectos"]} colorScheme='teal' variant='link' as={Link} to="/proyectos/api">proyectos</Button>
                    <Button id={styles["button_clientes"]} colorScheme='teal' variant='link' as={Link} to="/clientes/api">clientes</Button>
                </div>
                <div id={styles["select-categories-box-two"]} style={{display:isVisible}}>
                    {isProyectosPage && isAuth && (
                    <Select placeholder="Selecciona un estado" style={{height:"100%"}} onChange={handleChange}>
                        {
                            estados ?
                            <>
                            {
                                estados.map(estado => (
                                    <option key={estado.id} value={estado.id}>
                                        {estado.title}
                                    </option>
                                ))
                            }
                            </> : <> no categories</>
                        }
                    </Select>
                    )}
                </div>
            </div>

            <div id={styles["accounts-buttons-box"]}>


                {isProyectosPage && isAuth && (
                    <Button id={styles["button_create"]} colorScheme='teal' variant='link' as={Link} to="/app/api/create/proyecto">create</Button>
                )}

                {isClientesPage && isAuth && (
                    <Button id={styles["button_create"]} colorScheme='teal' variant='link' as={Link} to="/app/api/create/cliente">create</Button>
                )}

                {
                    isAuth ?
                    <>
                        <Button id={styles["button_logout"]} colorScheme='teal' variant='link' as={Link} to="/app/api/logout">logout</Button>

                    </> :<>
                        <Button id={styles["button_login"]} colorScheme='teal' variant='link' as={Link} to="/app/api/login">login</Button>
                        <Button id={styles["button_register"]} colorScheme='teal' variant='link' as={Link} to="/app/api/register">register</Button>
                    </>
                }

            </div>

        </div>
    );
};

export default HeaderComponent