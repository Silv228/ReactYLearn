import styles from "./Form.module.css"
import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isShow, setIsShow] = useState(false)
    const [isAuth, setIsAuth] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuth) navigate('/success')
    }, [isAuth])
    const users = [{ //тестовые данные
        login: 'Y_LAB@gmail.com',
        password: '123456'
    }]
    const checkUser = async ({ login, password }) => { //здесь можно сделать POST запрос на сервер где проверялись бы пароль и логин 
        const check = users.some((u) => (u.login === login && u.password === password))
        setIsAuth(check)
    }
    return (
        <div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit((data) => checkUser(data))} className={`${styles.form} ${(isAuth === false) && styles.formErr}`}>
                    <h1 className={styles.headerForm}>LogIn</h1>
                    <label className={styles.labelInput} htmlFor="login">Email</label>
                    <div>
                        <Input error={errors.login} {...register('login', {
                            required: "This field is required!",
                            pattern: {
                                value: /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/,
                                message: 'Please enter Email'
                            }
                        })} placeholder='Email' type='text' id='login' />
                        {errors.login && <span className={styles.errorMess}>{errors.login.message}</span>}
                    </div>
                    <label className={styles.labelInput} htmlFor="password">Password</label>
                    <div>
                        <Input error={errors.password} {...register('password', { required: "This field is required!" })} placeholder='Password' type={isShow ? 'text' : 'password'} id='password' />
                        {errors.password && <span className={styles.errorMess}>{errors.password.message}</span>}
                    </div>

                    <div className={styles.showPassword}>
                        <input onChange={() => setIsShow(!isShow)} checked={isShow} type='checkbox' /> Show password
                    </div>
                    {(isAuth === false) && <span className={styles.formErrorMess}> Incorrect login or password</span>}
                    <button className={styles.submitButton}>Log In</button>
                </form>
                <div>
                    <div className={styles.backgroundFigure} />
                    <div className={styles.backgroundFigure} />
                </div>
            </div>
        </div>
    )
}