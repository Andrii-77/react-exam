import {useEffect} from "react";
import {login} from "../../services/api.service.ts";

export const LoginComponent = () => {
    useEffect(() => {
        login(
            {
                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 40
            }
        );
    }, []);

    return (
        <>
            LoginComponent
        </>
    );
};