import React from 'react';
import { Card, SimpleGrid, Button} from '@chakra-ui/react'
import { return_proyectos_by_estado } from '../redux/actions/proyecto'
import { useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function ProyectosPorEstadosComponent({return_proyectos_by_estado, proyectos_list, setIsVisible}){

    const params = useParams();
    const id = params.str;

    useEffect(()=> {return_proyectos_by_estado(id)}, [])
    setIsVisible("none")

    return (
        <div className="container">
            <div className="main-panel">

                <SimpleGrid columns={[2, null, 2]} >
                    {
                        proyectos_list ?
                        <>
                            {
                                proyectos_list.map(proyecto=>(
                                    <Card className='card-movie' key={proyecto.id}>
                                        <div style={{height:"70%"}}>
                                            {proyecto.nombre}
                                        </div>
                                        <div>
                                            <Button className="button_info" colorScheme='teal' variant='link' as={Link} to={`/proyectos/api/${proyecto.id}`}>info</Button>
                                        </div>
                                    </Card>
                                ))
                            }
                        </> :
                            <>no items</>
                    }
                </SimpleGrid>

            </div>
        </div>
    );
};


const mapStateToProps = state => ({
    proyectos_list: state.proyecto.proyectos_list,
})

    export default connect(mapStateToProps,{return_proyectos_by_estado})(ProyectosPorEstadosComponent)