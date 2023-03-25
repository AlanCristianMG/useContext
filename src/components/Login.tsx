import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../interfaces/PropsContext';
import { User } from '../interfaces/User';

export const Login = () =>{
    const {user, updateUser} = useContext(UserContext);

    return(
        <div>
            <h1>Login</h1>
            <pre>
                {JSON.stringify(user,null,2)}
            </pre>
            <button className='btn btn-primary' onClick={() => updateUser(new User(1,'Alan','Martinez'))}>
                Modificare contexto
            </button>
        </div>
    )
}
