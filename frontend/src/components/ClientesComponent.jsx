import { return_clientes } from '../redux/actions/cliente'
import { connect } from "react-redux";
import React, { useEffect } from 'react';
import { Card, SimpleGrid, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function ClientesComponent({return_clientes, clientes_list, setIsVisible}){

    useEffect(()=> {return_clientes()}, [])
    setIsVisible("none")

    return (
        <div className='container'>
            <div className='main-panel'>

                <SimpleGrid columns={[2, null, 2]} >
                        {
                            clientes_list ?
                            <>
                                {
                                    clientes_list.map(cliente=>(
                                        <Card className='card-box' key={cliente.id}>
                                            <div style={{height:"70%"}}>
                                                {cliente.nombre}
                                            </div>
                                            <div>
                                                <Button className="button_info" colorScheme='teal' variant='link' as={Link} to={`/clientes/api/${cliente.id}`}>info</Button>
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