import {useForm} from 'react-hook-form';
import { Input, Stack, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import {create_cliente} from "../redux/actions/cliente";

export function CreateClienteComponent({isAuth}){

    const {register, handleSubmit, formState: {errors} }= useForm();
    const navigate = useNavigate();

    const onsubmit = handleSubmit(async data => {
        const res = await create_cliente(data);
        navigate("/");
    });

    return (
        <div className='container'>
            <div className='main-panel'>

                {
                    isAuth ?
                    <>
                        <h4>Crear nuevo cliente</h4>

                        <form onSubmit={onsubmit} style={{margin: "7%"}}>


                            <Stack spacing={4}>

                                <label htmlFor="nombre">Name</label>
                                <Input id="nombre" {...register("nombre", {required: true})}/>
                                {errors.nombre && <span>Este campo es obligatorio</span>}

                                <label htmlFor="email">Email</label>
                                <Input id="email" {...register("email", {required: true})}/>
                                {errors.email && <span>Este campo es obligatorio</span>}

                                <label htmlFor="telefono">Telefono</label>
                                <Input id="telefono" {...register("telefono", {required: true})}/>
                                {errors.telefono && <span>Este campo es obligatorio</span>}

                                <label htmlFor="descripcion">Descripcion</label>
                                <Textarea id="descripcion" {...register("descripcion", {required: true})}/>
                                {errors.descripcion && <span>Este campo es obligatorio</span>}

                                <button>Crear</button>

                            </Stack>

                        </form>

                    </> :<>

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

export default connect(mapStateToProps, {})(CreateClienteComponent)