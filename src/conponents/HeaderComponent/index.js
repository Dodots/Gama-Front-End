import { Link } from 'react-router-dom';
import { NavStyled } from './style'
import Logo from '../../assets/img/img.png'

function Header(){
    return (
        <NavStyled>
            <img src={ Logo } alt="Logotipo" />
            <div  className="link-content">
                <Link to="/">Home</Link>
                <Link to="/cursos">Curso</Link>
                <Link to="/contatos">Contatos</Link>
                <Link to="/Addcursos">Adicionar Curso</Link>
                <Link to="/Addcontatos">Adicionar Contatos</Link>
            </div>
        </NavStyled>
    )
}

export default Header;