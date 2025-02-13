import Search from "../components/search";

import { useState } from "react";

import { UserProps } from "../types/user";

import User from "../components/user";

import Error from "../components/error";



const Home = () => {

    const [users, setUsers] = useState<UserProps | null>(null);

    const [error, setError] = useState(false);

    const loadUser = async (userName: string) => {
        setError(false);
        setUsers(null);
        
        const response = await fetch(`https://api.github.com/users/${userName}`);

        const data = await response.json();

        if (response.status === 404) {
            setError(true);
            return;
        }

        const { avatar_url, login, location, followers, following } = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        };

        setUsers(userData);
    
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {users &&  <User {...users} />}
            {error && <Error />}
        </div>
    );
};

export default Home;