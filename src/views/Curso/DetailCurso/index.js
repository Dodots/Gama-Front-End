import api from "../../../services/api";

import HeaderComponent from '../../../conponents/HeaderComponent';
import FooterComponent from '../../../conponents/FooterComponentet';
import { useEffect, useState } from 'react';
import { Container, ContactSection } from './style';
import { useHistory } from "react-router-dom";

function DetailCurso(props) {
    const [curso, setcursos] = useState([])
    const { id } = props.match.params
    const history = useHistory()

    useEffect(() => {
        api.get(`cursos/${id}`).then(
            response => {
                setcursos(response.data)
            }
        )
    }, [id])


    return (
        <>
            <HeaderComponent />
            <Container>
                <div className="first-section">
                    <h1>Lista de Cursos</h1>

                    <ContactSection>

                        <div className="card" key={curso.id}>
                            <div>
                                <h2>
                                    {curso.nome}
                                </h2>
                                <p>
                                    {curso.categoria}
                                </p>
                            </div>
                        </div>

                    </ContactSection>
                    <button
                        onClick={() => history.push("/cursos/edit/" + curso.id)}>
                        Editar
                    </button>

                    <button
                        onClick={() => history.push("/cursos/delete/" + curso.id)}>
                        Deletar
                    </button>
                </div>
            </Container>
            <FooterComponent />
        </>
    )
}



export default DetailCurso;