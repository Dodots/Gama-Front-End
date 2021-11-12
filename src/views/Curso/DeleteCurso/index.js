import api from "../../../services/api";

import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { useState, useEffect, useCallback } from "react";
import { Container, ContactSection } from './style';

function DeleteCurso(props) {
    const [curso, setCurso] = useState();
    const { id } = props.match.params
    const [submited, setSubmited] = useState(false)

    useEffect(() => {
        api.get(`cursos/${id}`).then(
            response => {
                setCurso(response.data)
            }
        )
    }, [])

    const leadSubmit = useCallback((e) => {
        e.preventDefault();
        api.delete(`cursos/${id}`).then(
            response => {
                if (response.status === 204) setSubmited(true)

            }
        )
    }, []);

    return (
        <>
            <HeaderComponent />
            <Container>
                <div className="first-section">
                    <h1>Curso</h1>

                    <ContactSection>
                        {!submited ? (
                            <form onSubmit={leadSubmit}>
                                <div className="section" key={curso?.id}>
                                    <div key={curso?.id}>
                                        <h2>
                                            {curso?.nome}
                                        </h2>

                                        <p>
                                            {curso?.categoria}
                                        </p>


                                    </div>

                                    <button type="submit" >Deletar</button>


                                </div>
                            </form>
                        ) : (
                            <>
                                <div>
                                    <h2> Seu curso foi realizada com sucesso!</h2>
                                </div>
                            </>

                        )}
                    </ContactSection>
                </div>
            </Container>
            <FooterComponent />
        </>
    )

}


export default DeleteCurso;