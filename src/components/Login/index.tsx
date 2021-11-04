import { useForm } from "react-hook-form";
import { Container } from "./style"
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from "../../Providers/Auth";
import * as yup from "yup";

const regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

interface User {
    email: string;
    password: string;
    token?: any;
}

export const Login = () => {

    const {signIn} = useAuth()

    
    const formSchema = yup.object().shape({
        email: yup
        .string()
        .required("Required Entry")
        .email("Invalid email"),
        password: yup
        .string()
        .required("Required entry")
        .matches(regex,
        "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma minuscula, um número e um caracter especial.")
    })
    
    const { register, handleSubmit, formState: { errors } } = useForm<User>({resolver: yupResolver(formSchema)})
    const handleForm = (data: User) => {
        console.log(data)
        signIn(data)
    }

    return (
        <Container>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(handleForm)}>
                <input 
                    type='text'
                    {...register('email')}
                    name='email'
                    placeholder='E-mail'
                />
                     {errors?.email && <span>{errors.email.message}</span>}
                <input 
                    type='password'
                    {...register('password')}
                    name='password'
                    placeholder='Password'
                />
                     {errors?.password && <span>{errors.password.message}</span>}
                <button
                    type='submit'>Login</button>
            </form>
        </Container>
    )
}