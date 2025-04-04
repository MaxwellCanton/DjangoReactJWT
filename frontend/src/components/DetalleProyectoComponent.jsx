import {return_proyecto_by_id,delete_proyecto} from "../redux/actions/proyecto";
import { connect } from "react-redux";
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../styles/DetalleProyectoComponent.module.css";
import { Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function DetalleProyectoComponent ({return_proyecto_by_id, detail_proyecto}){


    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();


    useEffect(()=> {return_proyecto_by_id(id)}, [])

    return(
        <div className='container' >
            <div className='main-panel'>
                {
                    detail_proyecto ?
                        <>
                            <div id={styles["title-box"]}>
                                {detail_proyecto.nombre}
                            </div>

                            <div id={styles["description-box"]}>
                                {detail_proyecto.estado}
                            </div>

                            <div id={styles["description-box"]}>
                                Cliente: {detail_proyecto.cliente}
                            </div>

                            <div id={styles["description-box"]}>
                                {detail_proyecto.descripcion}
                            </div>

                            <div id={styles["control-buttons-box-box"]}>
                                <div id={styles["delete-box"]}>
                                    <Button onClick={async () => {
                                        delete_proyecto(detail_proyecto.id);
                                        navigate("/");
                                    }} colorScheme='pink' variant='solid'> Borrar </Button>
                                </div>

                                <div id={styles["edit-box"]}>
                                    <Button id={styles["button_proyectos"]} colorScheme='teal' variant='solid' as={Link}
                                            to={`/proyectos/api/actualizar/${detail_proyecto.id}`}>Actualizar</Button>
                                </div>
                            </div>

                        </> : <> no item </>
                }
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    detail_proyecto: state.proyecto.detail_proyecto,

})

export default connect(mapStateToProps,{return_proyecto_by_id})(DetalleProyectoComponent)