import { Link } from 'react-router-dom';
import { NavStyled } from './style'
import Logo from '../../assets/img/logo.png'

function Header(){
    return (
        <NavStyled>
            <div className="divImg">
                <img src={ Logo } alt="Logotipo" />
            </div>
            <div  className="link-content">
                <Link to="/">Home</Link>
                <Link to="/cursos/">Curso</Link>
                <Link to="/contatos/">Contatos</Link>
            </div>
        </NavStyled>
    )
}

export default Header;