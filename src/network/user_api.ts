import {User} from "../models/user";

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);

    if (response.ok){
        return response;
    }else{
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        throw errorBody(errorMessage);
    }
}

export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("/api/users", {method:"GET"});
    return response.json();
}

export interface UserStatsProps {
    username: string,
}

export async function getUserStats(props : UserStatsProps): Promise<User> {
    const response = await fetchData("/api/users/userSettings", 
    {
        method:"GET", 
        headers : {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(props.username),
    });

    return response.json();
}

export interface SetStatProps {
    username: string,
    stat: string,
    newValue: number
}

export async function setStat(props : SetStatProps): Promise<User> {
    const response = await fetchData("/api/users/userSettings", 
    {
        method:"POST", 
        headers : {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(props),
    });

    return response.json();
}

export interface SignUpCredentials {
    username: string,
    email: string,
    password: string
}

export async function signup(credentials : SignUpCredentials): Promise<User> {
    const response = await fetchData("/api/users/signup", 
    {
        method:"POST", 
        headers : {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(credentials),
    });

    return response.json();
}

export interface LogInCredentials {
    username: string,
    password: string
}

export async function login(credentials : LogInCredentials): Promise<User> {
    const response = await fetchData("/api/users/login", 
    {
        method:"POST", 
        headers : {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(credentials),
    });

    return response.json();
}

export async function logout() {
    await fetchData("/api/users/logout", {method:"POST"});
}