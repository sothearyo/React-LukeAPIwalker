import React, {useState} from 'react';
import { navigate } from '@reach/router';

const SearchForm = (props) => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");

    const handleClick = (e) => {
        navigate(`/${category}/${id}`)
        document.getElementById("categ").value = "";
        document.getElementById("id").value = "";
    }

    return (
        <div className="row py-4">
                <label className="col-3" htmlFor="categ">Search for:</label>
                <select onChange={ (e) => setCategory(e.target.value)} className="col-3" name="categ" id="categ">
                    <option value="">-Select Category-</option>
                    <option value="planets">Planets</option>
                    <option value="people">People</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="starships">Starships</option>
                    <option value="species">Species</option>
                </select>
                <label className="col-1" htmlFor="id" >ID:</label>
                <input onChange={ (e) => setId(e.target.value)} className="col-1 form-control" type="number" name="id" id="id" min="0"/>
                <button onClick={ handleClick } className="col-2 ml-4 btn btn-outline-info">Search</button>
        </div>
    );
}

export default SearchForm;