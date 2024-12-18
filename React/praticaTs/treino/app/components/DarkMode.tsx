import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTema } from '../context/TemaContext';


export const DarkMode = () => {
    const temaCtx = useTema();

    const handleSwitchTema = () => {
        console.log(temaCtx?.tema)
        if(temaCtx) {
            temaCtx.setTema(temaCtx.tema === 'light' ? 'dark' : 'light');
        }
    }
    return (
        <section className={`z-30 container-botao-tema ${temaCtx?.tema === 'light' ? 'light' : 'dark'}`}>
            <input type="checkbox" id="check" className="check" />

            <label htmlFor="check" onClick={handleSwitchTema} className="label">
                <span><FontAwesomeIcon icon={faSun}/></span>
                <span><FontAwesomeIcon icon={faMoon}/></span>
                <div className="ball"></div>
            </label>
        </section>
    )
}