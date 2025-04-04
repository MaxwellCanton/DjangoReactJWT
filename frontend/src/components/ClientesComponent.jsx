import { return_clientes } from '../redux/actions/cliente'
import { connect } from "react-redux";
import { useEffect } from 'react';
import { Card, SimpleGrid, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export function ClientesComponent({return_clientes, clientes_list}){

    useEffect(()=> {return_clientes()}, [])

    return (
        <div className='container'>
            <div className='main-panel'>

                <SimpleGrid columns={[2, null, 2]} >
                        {
                            clientes_list ?
                            <>
                                {
                                    clientes_list.map(cliente=>(
                                        <Card className='card-movie' key={cliente.id}>
                                            <div style={{height:"70%"}}>
                                                {cliente.nombre}
                                            </div>
                                            <div>
                                            <Button size='sm' colorScheme='teal' variant='outline'><Link to={`/cliente/api/${cliente.id}`}>info</Link></Button>
                                            </div>
                                        </Card>
                                    ))
                                }
                            </> :
                                <>No hay clientes</>
                        }
                    </SimpleGrid>

            </div>
        </div>

    );

}

const mapStateToProps = state => ({
    clientes_list: state.cliente.clientes_list,
})

export default connect(mapStateToProps,{return_clientes})(ClientesComponent)