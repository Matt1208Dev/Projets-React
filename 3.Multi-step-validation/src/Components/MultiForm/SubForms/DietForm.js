import { useState } from 'react';
import './SubForm.css';

export default function DietForm(props) {

    const [data, setData] = useState({
        dietForm: "nodiet"
    })

    const PreventFunc = e => e.preventDefault();
    const handleRadio = e => {
        setData({dietForm: e.target.value});
    }

    return (
        <form onSubmit={PreventFunc} className='diet-form'>

            <p>Quel est ton régime alimentaire ?</p>

            <label htmlFor="nodiet">Pas de régime en particulier</label>
            <input
                onChange={handleRadio}
                type="radio"
                name="diet"
                id="nodiet"
                value="nodiet" />

            <label htmlFor="homnivorous">Homnivore</label>
            <input
                onChange={handleRadio}
                type="radio"
                name="diet"
                id="homnivorous"
                value="homnivorous" />

            <label htmlFor="vegetarian">Végétarien</label>
            <input
                onChange={handleRadio}
                type="radio"
                name="diet"
                id="vegetarian"
                value="vegetarian" />

            <label htmlFor="vegan">Végan</label>
            <input
                onChange={handleRadio}
                type="radio"
                name="diet"
                id="vegan"
                value="vegan" />

            <button onClick={() => props.modifyIndex(3, data)}>Valider</button>

        </form>
    )
}
