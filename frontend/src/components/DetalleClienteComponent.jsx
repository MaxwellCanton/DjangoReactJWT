import {return_cliente_by_id, delete_cliente} from "../redux/actions/cliente";
import { connect } from "react-redux";
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../styles/DetalleClienteComponent.module.css";
import { Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function DetalleClienteComponent ({return_cliente_by_id, detail_cliente}){


    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();


    useEffect(()=> {return_cliente_by_id(id)}, [])

    return(
        <div className='container' >
            <div className='main-panel'>
                {
                    detail_cliente ?
                        <>
                            <div id={styles["title-box"]}>
                                {detail_cliente.nombre}
                            </div>

                            <div id={styles["information-box"]}>
                                <div id={styles["date-box"]}>
                                    {detail_cliente.email}
                                </div>
                                <div id={styles["phone-box"]}>
                                    {detail_cliente.telefono}
                                </div>
                            </div>

                            <div id={styles["description-box"]}>
                                Agregado por: {detail_cliente.usuario}
                            </div>

                            <div id={styles["description-box"]}>
                                {detail_cliente.descripcion}
                            </div>

                            <div id={styles["control-buttons-box-box"]}>
                                <div id={styles["delete-box"]} >
                                    <Button onClick={async () => {
                                        delete_cliente(detail_cliente.id);
                                        navigate("/");
                                    }} colorScheme='pink' variant='solid'> Borrar </Button>
                                </div>

                                <div id={styles["edit-box"]} >
                                    <Button id={styles["button_proyectos"]} colorScheme='teal' variant='solid' as={Link}
                                            to={`/clientes/api/actualizar/${detail_cliente.id}`}>Actualizar</Button>
                                </div>
                            </div>

                        </> : <> no item </>
                }
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    detail_cliente: state.cliente.detail_cliente,

})

export default connect(mapStateToProps,{return_cliente_by_id})(DetalleClienteComponent)