import "./DarkMode.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, } from '@fortawesome/free-solid-svg-icons'
import { useTema } from "@/context/TemaContext";

export const DarkMode = () => {
    const temaCtx = useTema();

    const handleSwitchTema = () => {
        if(temaCtx) {
            temaCtx?.setTema(temaCtx?.tema === 'dark' ? 'light' : 'dark')
        }
       
    }

    return (
        <div className="container-darkmode">
            <input type="checkbox" id="check" className="checkbox" onClick={handleSwitchTema}/>
            <label htmlFor="check" className='label'>
                <FontAwesomeIcon icon={faMoon} className="moonIcon"/>
                <FontAwesomeIcon icon={faSun} className="sunIcon"/>
                <div className="ball"></div>
            </label> 
        </div>
    )
}