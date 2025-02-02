import {useForm} from "react-hook-form";
import {userValidator} from "../../validators/user.validator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

interface IFormProps {
    username: string,
    password: string
}


export const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}}
        = useForm<IFormProps>({mode: 'all', resolver: joiResolver(userValidator)});

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);// не знаю як це перекинути в логін.
    };

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <div><label>
                    <input type="text" {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label></div>

                <div><label>
                    <input type="text" {...register('password')}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label></div>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};