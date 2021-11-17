import api from "../../../services/api";

import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { useState, useEffect } from "react";
import { Container, ContactSection } from './style';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/78259-loading.json';


function ListContato() {
    const [contatos, setcontatos] = useState([])
    const [statusContato, setStatusContato] = useState([])
    const history = useHistory()
    const [load, setLoad] = useState([false])

    useEffect(() => {
        api.get('/contatos').then(
            response => {
                setcontatos(response.data)
                setLoad(false)
            }
        )
    }, [])

    if (load) {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animation
        }

        return (
            <>
                <HeaderComponent />
                <Container>
                    <div>
                        <Lottie
                            options={defaultOptions}
                            width={200}
                            height={200}
                        />
                    </div>
                </Container>
                <FooterComponent />
            </>
        );
    }


    return (
        <>
            <HeaderComponent />
            <Container>
                <div className="first-section">
                    <h1>Lista de Contatos</h1>
                    <div className="button_add">
                        <button
                            className="card__btn2"
                            onClick={() => history.push("/contatos/add")}>
                            Adicionar
                        </button>
                    </div>

                    <ContactSection>
                        <table id="customers">
                            <tr>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>E-mail</th>
                                <th>Status</th>
                                <th>Ação</th>
                            </tr>
                            {contatos.map(contato => (
                                <tr key={contato.id}>
                                    <td>{contato.nome}</td>
                                    <td>{contato.telefone}</td>
                                    <td>{contato.email}</td>
                                    <td>{contato.status}</td>
                                    <button
                                        className="card__btn"
                                        onClick={() => history.push("/Contatos/detail/" + contato.id)}>
                                        Detalhes
                                    </button>
                                </tr>
                            ))}
                        </table>
                    </ContactSection>
                </div>

            </Container>
            <FooterComponent />
        </>
    )
}



export default ListContato;