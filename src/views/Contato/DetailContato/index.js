import api from "../../../services/api";

import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { useState, useEffect } from "react";
import { Container, ContactSection } from '../DetailContato/style';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/78259-loading.json';

function DetailContato(props) {
    const [contato, setContato] = useState();
    const { id } = props.match.params
    const history = useHistory()
    const [load, setLoad] = useState([false])
    const [idCurso, setIdCurso] = useState()
    const [curso, setCurso] = useState()

    useEffect(() => {
        api.get(`contatos/${id}`).then(
            response => {
                setContato(response.data)
                setIdCurso(response.data.curso_id)
                setLoad(false)
            }
        )
    }, [id])

    useEffect(() => {
        api.get(`cursos/${idCurso}`).then(
            response => {
                setCurso(response.data)
            }
        )
    }, [idCurso])

    if(load){
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
                    <h1>Contato</h1>

                    <ContactSection>
                        <div className="card" key={contato?.id}>
                            <div className="divNome">
                            <h2>
                                {contato?.nome}
                            </h2>
                            </div>
                            <div  className="divConteudo">
                            <p>
                                <strong>CPF: </strong>
                                {contato?.cpf}
                            </p>
                            <p>
                                <strong>CEP: </strong>
                                {contato?.cep}
                            </p>
                            <p>
                                <strong>Lougradouro: </strong>
                                {contato?.lougradouro}
                            </p>
                            <p>
                                <strong>Numero: </strong>
                                {contato?.numero}
                            </p>
                            <p>
                                <strong>Bairro: </strong>
                                {contato?.bairro}
                            </p>
                            <p>
                                <strong>Cidade: </strong>
                                {contato?.cidade}
                            </p>
                            <p>
                                <strong>UF: </strong>
                                {contato?.uf}
                            </p>
                            <p>
                                <strong>E-mail: </strong>
                                {contato?.email}
                            </p>
                            <p>
                                <strong>Telefone: </strong>
                                {contato?.telefone}
                            </p>
                            <p>
                                <strong>Whatsapp: </strong>
                                {contato?.whatsapp}
                            </p>
                            <p>
                                <strong>Status: </strong>
                                {contato?.status}
                            </p>
                            <p>
                                <strong>Curso ID: </strong>
                                {curso?.nome}
                            </p>
                            </div>
                        </div>

                    </ContactSection>
                    <button
                        className="card__btn"
                        onClick={() => history.push("/Contatos/edit/" + contato.id)}>
                        Editar
                    </button>

                    <button
                        className="card__btn"
                        onClick={() => history.push("/Contatos/delete/" + contato.id)}>
                        Deletar
                    </button>
                </div>
            </Container>
            <FooterComponent />
        </>
    )

}


export default DetailContato;