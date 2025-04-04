import {useForm} from 'react-hook-form';
import {create_proyecto} from "../redux/actions/proyecto";
import { Input, Stack, Textarea, Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { return_clientes } from '../redux/actions/cliente'
import { useEffect } from 'react';
import { connect } from "react-redux";


export function CreateProyectoComponent({isAuth, return_clientes, clientes_list}){

    useEffect(()=> {return_clientes()}, [])

    const {register, handleSubmit, formState: {errors} }= useForm();
    const navigate = useNavigate();

    const onsubmit = handleSubmit(async data => {
        const res = await create_proyecto(data);
        navigate("/");
    });

    const estados = [
      { id: "pendiente", title: "Pendiente" },
      { id: "en_progreso", title: "En Progreso" },
      { id: "completado", title: "Completado" },
    ];

    return (
        <div className='container'>
            <div className='main-panel'>

                {
                    isAuth ?
                    <>
                        <h4>Crear nuevo proyecto</h4>

                        <form onSubmit={onsubmit} style={{margin: "7%"}}>

                            <Stack spacing={4}>

                                <label htmlFor="nombre">Name</label>
                                <Input id="nombre" {...register("nombre", {required: true})}/>
                                {errors.nombre && <span>Este campo es obligatorio</span>}

                                <label htmlFor="cliente">Cliente</label>
                                <Select id="cliente" placeholder='Selecciona un cliente'
                                        style={{height: "100%"}} {...register("cliente", {required: true})}>
                                    {
                                        clientes_list ?
                                            <>
                                                {
                                                    clientes_list.map(cliente => (
                                                        <option key={cliente.id}
                                                                value={cliente.id}>{cliente.nombre}</option>
                                                    ))
                                                }
                                            </> : <> no hay clientes</>
                                    }
                                </Select>
                                {errors.cliente && <span>this field is required</span>}

                                <label htmlFor="estado">Estado</label>
                                <Select placeholder="Selecciona un estado"
                                        style={{height: "100%"}} {...register("estado", {required: true})}>
                                    {estados.map((estado) => (
                                        <option key={estado.id} value={estado.id}>
                                            {estado.title}
                                        </option>
                                    ))}
                                </Select>
                                {errors.estado && <span>this field is required</span>}

                                <label htmlFor="descripcion">Descripcion</label>
                                <Textarea id="descripcion" {...register("descripcion", {required: true})}/>
                                {errors.descripcion && <span>Este campo es obligatorio</span>}

                                <button>Crear</button>

                            </Stack>

                        </form>

                    </> : <>

                        <h1>DEBE LOGEARSE PRIMERO</h1>

                    </>
                }

            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    clientes_list: state.cliente.clientes_list,
})

export default connect(mapStateToProps, {return_clientes})(CreateProyectoComponent)