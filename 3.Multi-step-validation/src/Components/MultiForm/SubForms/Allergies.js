import { useRef } from 'react'

export default function Allergies(props) {

    const allCheckboxes = useRef([]);

    const addCheck = el => {
        if (el && !allCheckboxes.current.includes(el)) {
            allCheckboxes.current.push(el);
        }
    }

    const allergiesData = {
        allergies: []
    };
    const preventFunc = e => {
        e.preventDefault();


        allCheckboxes.current.forEach(checkbox => {
            if (checkbox.checked) {
                allergiesData.allergies.push(checkbox.value);
            }
        });

        props.modifyIndex(5, allergiesData);
    }

    return (
        <form onSubmit={preventFunc} className='checkbox-form'>

            <p>As-tu des allergique à certains aliments ?</p>
            <span>Plusieurs choix possibles.</span>

            <label htmlFor="milk">Lait</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="milk" 
            id="milk"
            value="milk" />
            
            <label htmlFor="pollen">Pollen</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="pollen" 
            id="pollen"
            value="pollen" />

            <label htmlFor="nuts">Noix</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="nuts" 
            id="nuts"
            value="nuts" />

            <label htmlFor="eggs">Oeuf</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="eggs" 
            id="eggs"
            value="eggs" />

            <label htmlFor="shellfish">Fruits de mer</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="shellfish" 
            id="shellfish"
            value="shellfish" />

            <div className="container-nav-btns">
                <button onClick={() => props.modifyIndex(3)} type="button">Retour</button>
                <button>Valider</button>
            </div>

        </form>
    )
}
