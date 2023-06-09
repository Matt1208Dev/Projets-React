import { useState } from 'react';
import Indicator from './Indicator/Indicator';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';
import './MultiForm.css';
import Allergies from './SubForms/Allergies';
import DietForm from './SubForms/DietForm';
import FoodStyle from './SubForms/FoodStyle';
import HateLove from './SubForms/HateLove';


export default function MultiForm() {

    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setAllFormData] = useState({
        dietForm: "",
        foodStyle: [],
        allergies: [],
        prefs: {}
    })

    const modifyIndex = (index, data) => {
        setFormIndex(index);

        if (data) {
            // Duplication du state
            const newData = { ...allFormData };
            // Récupération de la propriété contenue dans data
            const firstPropNewData = Object.keys(data)[0];

            newData[firstPropNewData] = data[firstPropNewData];
            setAllFormData(newData);
        }

    }

    return (
        <div className='container-multiform'>
            <Indicator formIndex={formIndex} />
            {formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} />
            : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} />
                : formIndex === 3 ? <FoodStyle modifyIndex={modifyIndex} />
                : formIndex === 4 ? <Allergies modifyIndex={modifyIndex} />
                : formIndex === 5 ? <HateLove modifyIndex={modifyIndex} />
                : formIndex === 6 ? <CardEnd modifyIndex={modifyIndex} />
                : ""}
        </div>
    )
}
