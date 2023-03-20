import { useState } from 'react';
import './SubForm.css';

export default function HateLove(props) {

    const [formData, setFormData] = useState({
        prefs: {
            love: "",
            hate: ""
        }
    });

    const preventFunc = e => {
        e.preventDefault();

        props.modifyIndex(6, formData);
    }

    const handleTxtArea = (e, pref) => {
        if (pref === 'loved') {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    love: e.target.value
                }
            })
        } else if (pref === 'hated') {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    hate: e.target.value
                }
            })
        }
    }

    return (
        <form
            onSubmit={preventFunc}
            className='preferences-form'>
            <p>Parle-nous des aliments que tu préfères et que tu détestes !</p>

            <label htmlFor="loved">Les aliments préférés, séparés par une virgule :</label>
            <textarea
                onChange={e => handleTxtArea(e, 'loved')}
                id="loved"
                placeholder='Un ou plusieurs, si tu en as'></textarea>

            <label htmlFor="hated">Les aliments que tu ne supportes pas, séparés par une virgule :</label>
            <textarea
                onChange={e => handleTxtArea(e, 'hated')}
                id="hated"
                placeholder='Un ou plusieurs, si tu en as'></textarea>

            <div className="container-nav-btns">
                <button
                    type='button'
                    onClick={() => { props.modifyIndex(4) }}>RETOUR</button>
                <button>VALIDER</button>
            </div>
        </form>
    )
}
