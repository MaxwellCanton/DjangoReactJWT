import {useForm} from 'react-hook-form';
import {return_proyecto_by_id, update_proyecto} from "../redux/actions/proyecto";
import {Input, Select, Stack, Textarea} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {estados} from "../variables";


function ActualizarProyectoComponent({return_proyecto_by_id, detail_proyecto}){

    const params = useParams();
    const id = params.id;

    useEffect(()=> {return_proyecto_by_id(id)}, [])

    const {register, handleSubmit, formState: {errors} }= useForm();
    const navigate = useNavigate();

    const onsubmit = handleSubmit(async data => {
        const res = await update_proyecto(data, id);
        navigate("/");
    });

    return (
        <div className='container'>
            <div  className='main-panel'>

                {
                    detail_proyecto  ?
                    <>
                        <form onSubmit={onsubmit} style={{margin:"7%"}}>
                            <Stack spacing={4}>

                                <Input defaultValue = {detail_proyecto.nombre}  {...register("nombre", {required:true})}/>
                                {errors.nombre && <span>Este campo es obligatorio</span>}

                                <label htmlFor="estado">Estado</label>
                                <Select defaultValue = {detail_proyecto.estado.id}
                                        style={{height: "100%"}} {...register("estado", {required: true})}>
                                    {estados.map((estado) => (
                                        <option key={estado.id} value={estado.id}>
                                            {estado.title}
                                        </option>
                                    ))}
                                </Select>
                                {errors.estado && <span>this field is required</span>}

                                <Textarea defaultValue={detail_proyecto.descripcion}  placeholder='Plot'  {...register("descripcion", {required:true})}/>
                                {errors.descripcion && <span>Este campo es obligatorio</span>}

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
    detail_proyecto: state.proyecto.detail_proyecto,
})

export default connect(mapStateToProps,{return_proyecto_by_id})(ActualizarProyectoComponent)