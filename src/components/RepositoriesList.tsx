import React, { useState, useEffect } from "react"
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RootState } from "../redux/reducers";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const {data, error, loading} = useTypedSelector((state: RootState) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return <div >
        <form onSubmit={onSubmit}> 
            <div className="input-group mb-3">
                <input className="form-control" value={term} onChange={(e) => setTerm(e.target.value)} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">Button</button>
                </div>
            </div>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
}

export default RepositoriesList;