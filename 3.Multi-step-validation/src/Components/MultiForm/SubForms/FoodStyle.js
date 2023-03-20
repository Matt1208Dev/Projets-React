import { useRef } from 'react'

export default function FoodStyle(props) {

    const allCheckboxes = useRef([]);

    const addCheck = el => {
        if (el && !allCheckboxes.current.includes(el)) {
            allCheckboxes.current.push(el);
        }
    }

    const foodStyleData = {
        foodStyle: []
    };
    const preventFunc = e => {
        e.preventDefault();


        allCheckboxes.current.forEach(checkbox => {
            if (checkbox.checked) {
                foodStyleData.foodStyle.push(checkbox.value);
            }
        });

        props.modifyIndex(4, foodStyleData);
    }

    return (
        <form onSubmit={preventFunc} className='checkbox-form'>

            <p>Quelles sont tes cuisines préférées ?</p>
            <span>Plusieurs choix possibles.</span>

            <label htmlFor="italian">Italienne</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="italian" 
            id="italian"
            value="italian" />
            
            <label htmlFor="japanese">Japonaise</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="japanese" 
            id="japanese"
            value="japanese" />

            <label htmlFor="indian">Indienne</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="indian" 
            id="indian"
            value="indian" />

            <label htmlFor="thai">Thaïlandaise</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="thai" 
            id="thai"
            value="thai" />

            <label htmlFor="french">Française</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="french" 
            id="french"
            value="french" />

            <label htmlFor="chinese">Chinoise</label>
            <input
            ref={addCheck} 
            type="checkbox" 
            name="chinese" 
            id="chinese"
            value="chinese" />

            <div className="container-nav-btns">
                <button onClick={() => props.modifyIndex(2)} type="button">Retour</button>
                <button>Valider</button>
            </div>

        </form>
    )
}
