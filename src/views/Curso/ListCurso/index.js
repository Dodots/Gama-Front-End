import api from "../../../services/api";

import HeaderComponent from '../../../conponents/HeaderComponent';
import FooterComponent from '../../../conponents/FooterComponentet';
import { useEffect, useState } from 'react';
import { Container, ContactSection } from './style';
import { useHistory } from "react-router-dom";

function ListCurso() {
    const [cursos, setcursos] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('/cursos').then(
            response => {
                setcursos(response.data)
            }
        )
    }, [])


    return (
        <>
            <HeaderComponent />
            <Container>
                <div className="first-section">
                    <h1>Lista de Cursos</h1>

                    <ContactSection>
                        {cursos.map(curso => (
                            <div className="card" key={curso.id}>
                                <div>
                                    <h2>
                                        {curso.nome}
                                    </h2>
                                    <p>
                                        {curso.categoria}
                                    </p>
                                </div>

                                <button
                                    className="card__btn"
                                    onClick={() => history.push("/cursos/detail/" + curso.id)}>
                                    Mais Informações
                                </button>
                            </div>                           
                        ))}

                    </ContactSection>

                </div>
            </Container>
            <FooterComponent />
        </>
    )
}



export default ListCurso;