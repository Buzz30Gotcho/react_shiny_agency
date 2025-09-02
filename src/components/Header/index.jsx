import {NavLink} from 'react-router-dom'

function Header() {

    return (
        
    <nav>
        
        <NavLink to="/">Accueil</NavLink>

        <NavLink to="/survey/1">Questionnaire</NavLink>
        <NavLink to="/freelances">Profils</NavLink>

    </nav>
    )
}
export default Header