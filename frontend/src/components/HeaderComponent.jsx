import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link, useLocation  } from 'react-router-dom'
import styles from "../styles/HeaderComponent.module.css";

export function HeaderComponent({isAuth, setIsAuth}){

    const location = useLocation();
    const isProyectosPage = location.pathname.includes('proyectos');
    const isClientesPage = location.pathname.includes('clientes');

    return (
        <div className="header" style={{display:"flex"}}>

            <div id={styles["select-categories-box-sup"]}>
                <div  id={styles["select-categories-box-inf"]} style={{display:true}}>
                    <Button id={styles["button_proyectos"]} colorScheme='teal' variant='link' as={Link} to="/proyectos/api">proyectos</Button>
                    <Button id={styles["button_clientes"]} colorScheme='teal' variant='link' as={Link} to="/clientes/api">clientes</Button>
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