import api from "../../../services/api";

import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { useState, useEffect } from "react";
import { Container, ContactSection } from './style';
import { useHistory } from "react-router-dom";

function ListContato() {
    const [contatos, setcontatos] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('/contatos').then(
            response => {
                setcontatos(response.data)
            }
        )
    }, [])


    return (
        <>
            <HeaderComponent />
            <Container>
                <div className="first-section">
                    <h1>Lista de Contatos</h1>

                    <ContactSection>
                        {contatos.map(contato => (
                            <div className="card" key={contato.id}>
                                <div>
                                    <h2>
                                        <strong>{contato.nome} </strong>
                                    </h2>
                                    <p>
                                        CPF:
                                        {contato.cpf}
                                    </p>
                                    <p>
                                        <strong>UF: </strong>
                                        {contato.uf}
                                    </p>
                                    <p>
                                        <strong>E-mail: </strong>
                                        {contato.email}
                                    </p>
                                    <p>
                                        <strong>Telefone: </strong>
                                        {contato.telefone}
                                    </p>
                                    <p>
                                        <strong>Status: </strong>
                                        {contato.status}
                                    </p>
                                    <p>
                                        <strong>Curso ID: </strong>
                                        {contato.curso_id}
                                    </p>
                                </div>
                                <button
                                    className="card__btn"
                                    onClick={() => history.push("/Contatos/detail/" + contato.id)}>
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



export default ListContato;