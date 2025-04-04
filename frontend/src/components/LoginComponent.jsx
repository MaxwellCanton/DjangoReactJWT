import { Input, Stack, InputGroup,InputRightElement, Button,   FormControl } from '@chakra-ui/react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import { useState } from 'react';
import styles from "../styles/LoginComponent.module.css";
import axios from "axios";

export function LoginComponent({setIsAuth}){

    const toast = useToast()
    const {register, handleSubmit, formState: {errors} }= useForm();
    const navigate = useNavigate();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const onsubmit = handleSubmit(async (user) => {
        try {
          const response = await axios.post('http://localhost:8000/token/',user);
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          setIsAuth(true)
          navigate("/");
        } catch (error) {
          toast({
                title: 'Error',
                description: 'Revise sus credenciales',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    });

    return(
        <div className="container">
            <div className="main-panel">

<FormControl>
                <form onSubmit={onsubmit} > 

                    <Stack id={styles["login-card"]} spacing={7} >
                    
                        <Input type='email'  placeholder='email' {...register("email", {required:true})}/>
                        {errors.email && <span>Este campo es obligatorio</span>}

                        <InputGroup>
                            <Input
                                type={show ? 'text' : 'password'}
                                placeholder='password' {...register("password", {required:true})}/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {errors.password && <span>Este campo es obligatorio</span>}

                        <button>log in</button>

                    </Stack> 

                </form>
                    

                </FormControl>
            </div>
        </div>
    )

};