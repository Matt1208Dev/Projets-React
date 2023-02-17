import { createContext, useState } from "react";

export const Context = createContext();

// Vérification et attribution de la langue du navigateur si supportée
const supportedLangs = ['FR', 'EN', 'ES'];

let browserLang = navigator.language.slice(0, 2).toUpperCase();

// Si la langue n'est pas supporté, l'anglais est mise par défaut
if (supportedLangs.indexOf(browserLang) === -1) {
    console.log("not supported");
    browserLang = 'EN';
}

const ContextProvider = props => {

    const [lang, setLang] = useState(browserLang);

    const toggleLang = changeLang => {
        setLang(changeLang);
    }

    return (
        <Context.Provider value={{ lang, toggleLang }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;