import { useContext } from "react";
import { Context } from "../../context/LangContext";
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css';

export default function ToggleLangs() {

    const { toggleLang } = useContext(Context);

    return (
        <div className="container-langs">
            <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt="Drapeau français" title="Langue française" />
            <img onClick={() => toggleLang('ES')} src={SpanishFlag} alt="Drapeau espagnol" title="Langue espagnole" />
            <img onClick={() => toggleLang('EN')} src={EnglishFlag} alt="Drapeau anglais" title="Langue anglaise" />
        </div>
    )
}
