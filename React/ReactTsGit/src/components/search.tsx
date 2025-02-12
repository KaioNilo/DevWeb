import { BsSearch } from "react-icons/bs";

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

import { useState, KeyboardEvent } from "react";

import classes from "./search.module.css";

const Search = ( { loadUser }: SearchProps) => {
    const [userName, setUserName] = useState('');

    //para buscar com enter
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadUser(userName);
        }
    }

    return (
        <div className={classes.search}>
            <h2>Busque por um Usuário</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input type="text" placeholder="Digite o nome do Usuário" onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                />

                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};  

export default Search