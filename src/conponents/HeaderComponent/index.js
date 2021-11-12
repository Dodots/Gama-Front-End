import { Link } from 'react-router-dom';
import { NavStyled } from './style'
import Logo from '../../assets/img/img.png'

function Header(){
    return (
        <NavStyled>
            <img src={ Logo } alt="Logotipo" />
            <div  className="link-content">
                <Link to="/">Home</Link>
                <Link to="/cursos/">Curso</Link>
                <Link to="/contatos/">Contatos</Link>
                <Link to="/cursos/Add">Adicionar Curso</Link>
                <Link to="/contatos/Add">Adicionar Contatos</Link>
            </div>
        </NavStyled>
    )
}

export default Header;