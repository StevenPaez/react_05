import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const ItemListado = ({endPoint}) => {

    const [items, setItems] = useState([]);

    const fetchUsuarios = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`).then((res) => res.json());
        setItems(response);
    }

    useEffect(() => {
        fetchUsuarios()
    }, [endPoint]);

    return (
        <>
            <h2>Lista de {endPoint === 'users' ? 'Usuarios' : 'Comentarios'}</h2>
            <ul>
                {items.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>
        </>
    )
}

ItemListado.propTypes = {
    endPoint: PropTypes.string.isRequired,
}

export default ItemListado