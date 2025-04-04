import { return_proyectos } from '../redux/actions/proyecto'
import { connect } from "react-redux";
import { useEffect } from 'react';
import { Card, SimpleGrid } from '@chakra-ui/react'

export function ProyectosComponent({return_proyectos, proyectos_list}){

    useEffect(()=> {return_proyectos()}, [])

    return (
        <div className='container'>
            <div className='main-panel'>

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
                                            {/*<Button size='sm' colorScheme='teal' variant='outline'><Link to={`/proyecto/api/${proyecto.id}`}>info</Link></Button>*/}
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