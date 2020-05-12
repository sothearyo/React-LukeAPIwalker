import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const SearchDisplay = (props) => {
    const [show, setShow] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        setError("");
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
            .then(response => {setShow(response.data)})
            .catch(err => {setError("These aren't the droids you're looking for")});
    },[props.id]
    );
        

    return (
        <div className="container">
            { error? 
                <div className="row-col">
                    <h3>{error}</h3>   
                    <img src="https://www.somagnews.com/wp-content/uploads/2020/01/d1-12-e1579887035290.jpg" alt="obi one kenobi"/>
                </div> :
                <div className="row-col text-left">
                    {show.name?
                        <h1 className="py-3">{show.name}</h1> :
                        <h1 className="py-3">{show.title}</h1> 
                    }              
                    {Object.keys(show).filter(keyname => keyname != "films" && keyname != "name").map(key => 
                        <div className="row py-1" style={{listStyle:'none'}}>
                            <div className="col-3" style={{textTransform:'capitalize',fontWeight:'bold'}}>
                                {key.split("_")[0]} {key.split("_")[1]} {key.split("_")[2]}:
                            </div>
                            <div className="col">
                                { typeof show[key] == "string" ?
                                    show[key].split("://")[0] == "http" ?
                                    <Link to={`/${show[key].split("/api/")[1]}`}>{show[key]}</Link> : show[key]
                                    :
                                    show[key].map(value =>
                                        <li><Link to={`/${value.split("/api/")[1]}`}>{value}</Link></li>
                                    )
                                }
                            </div>
                        </div>
                    )}
                </div> 
            }
        </div>
    )
}

export default SearchDisplay;