import {return_cliente_by_id} from "../redux/actions/cliente";
import { connect } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../styles/DetalleClienteComponent.module.css";


function DetalleClienteComponent ({return_cliente_by_id, detail_cliente}){


    const params = useParams();
    const id = params.id;
    // const navigate = useNavigate();


    useEffect(()=> {return_cliente_by_id(id)}, [])

    return(
        <div className='container' >
            <div className='main-panel'>
                {
                    detail_cliente ?
                    <>
                        <div id={styles["title-movie"]} >
                            {detail_cliente.nombre}
                        </div>

                        <div id={styles["information-movie"]}>
                            <div id={styles["genre-movie"]} >
                                {new Intl.DateTimeFormat("es-ES").format(new Date(detail_cliente.creado_en))}
                            </div>
                            <div id={styles["released-movie"]} >
                                {detail_cliente.telefono}
                            </div>
                        </div>

                        <div id={styles["description-movie"]} >
                            Agregado por: {detail_cliente.usuario}
                        </div>



                        {/*<div id={styles["control-buttons-movie-box"]}>*/}
                        {/*    <div id={styles["delete-movie"]} >*/}
                        {/*        <Button onClick={async () => {*/}
                        {/*            delete_movie(detail_note.id);*/}
                        {/*            navigate("/");*/}
                        {/*        }} colorScheme='pink' variant='solid'> Delete </Button>*/}
                        {/*    </div>*/}

                        {/*    <div id={styles["edit-movie"]} >*/}
                        {/*        <Button colorScheme='teal' variant='solid'> <Link to={`/notes/api/update/${detail_note.id}`}>update</Link></Button>*/}
                        {/*    </div>*/}


                        {/*</div>*/}

                    </> : <> no items </>

                }



            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    detail_cliente: state.cliente.detail_cliente,

})

export default connect(mapStateToProps,{return_cliente_by_id})(DetalleClienteComponent)