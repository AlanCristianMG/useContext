import React, { useContext } from 'react'
import { UserContext } from '../interfaces/PropsContext'

export const About = () => {
    const {user} = useContext(UserContext);

    return(
        <div>
            <h1>About</h1>
            <pre>
                {JSON.stringify(user,null,3)}
            </pre>
        </div>
    )
}