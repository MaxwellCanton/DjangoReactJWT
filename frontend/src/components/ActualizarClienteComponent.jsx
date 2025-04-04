import {useForm} from 'react-hook-form';
import {return_cliente_by_id, update_cliente} from "../redux/actions/cliente";
import { Input, Stack, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ActualizarClienteComponent({return_cliente_by_id, detail_cliente}){

    const params = useParams();
    const id = params.id;

    useEffect(()=> {return_cliente_by_id(id)}, [])

    const {register, handleSubmit, formState: {errors} }= useForm();
    const navigate = useNavigate();

    const onsubmit = handleSubmit(async data => {
        const res = await update_cliente(data, id);
        navigate("/");
    });

    return (
        <div className='container'>
            <div  className='main-panel'>

                {
                    detail_cliente  ?
                    <>
                        <form onSubmit={onsubmit} style={{margin:"7%"}}>
                            <Stack spacing={4}>

                                <Input defaultValue = {detail_cliente.nombre}  {...register("nombre", {required:true})}/>
                                {errors.nombre && <span>this field is required</span>}

                                <Input defaultValue = {detail_cliente.email}  {...register("email", {required:true})}/>
                                {errors.email && <span>this field is required</span>}

                                <Input defaultValue = {detail_cliente.telefono}  {...register("telefono", {required:true})}/>
                                {errors.telefono && <span>this field is required</span>}

                                <Textarea defaultValue={detail_cliente.descripcion}  placeholder='Plot'  {...register("descripcion", {required:true})}/>
                                {errors.descripcion && <span>this field is required</span>}

                                <button>Actualizar</button>

                            </Stack>

                        </form>
                    </> : <> no items</>

                }

            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    detail_cliente: state.cliente.detail_cliente,
})

export default connect(mapStateToProps,{return_cliente_by_id})(ActualizarClienteComponent)