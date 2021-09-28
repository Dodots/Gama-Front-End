import { Link } from 'react-router-dom';

function Header(){
    return (
        <nav>
            <h1>Topo</h1>
            <Link to="/">Home</Link>
            <Link to="/cursos">Curso</Link>
            <Link to="/contatos">Contatos</Link>
        </nav>
    )
}

export default Header;