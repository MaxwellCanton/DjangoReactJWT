import { return_proyectos } from '../redux/actions/proyecto'
import { connect } from "react-redux";
import React, { useEffect } from 'react';
import {Button, Card, SimpleGrid} from '@chakra-ui/react'
import {Link} from "react-router-dom";

export function ProyectosComponent({return_proyectos, proyectos_list, setIsVisible}){

    useEffect(()=> {return_proyectos()}, [])
    setIsVisible("block")
    return (
        <div className='container'>
            <div className='main-panel'>

                <SimpleGrid columns={[2, null, 2]} >
                        {
                            proyectos_list ?
                            <>
                                {
                                    proyectos_list.map(proyecto=>(
                                        <Card className='card-box' key={proyecto.id}>
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
                                <>No hay proyectos</>
                        }
                    </SimpleGrid>

            </div>
        </div>

    );

};

const mapStateToProps = state => ({
    proyectos_list: state.proyecto.proyectos_list,
})

export default connect(mapStateToProps,{return_proyectos})(ProyectosComponent)