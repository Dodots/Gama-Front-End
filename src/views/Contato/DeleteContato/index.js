import api from "../../../services/api";

import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { useState, useEffect, useCallback } from "react";
import { Container, ContactSection } from './style';
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/78259-loading.json';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'


function DeleteContato(props) {
    const [contato, setContato] = useState();
    const { id } = props.match.params
    const [load, setLoad] = useState([false])
    const [submited, setSubmited] = useState(false)
    const history = useHistory()

    useEffect(() => {
        api.get(`contatos/${id}`).then(
            response => {
                setContato(response.data)
                setLoad(false)
            }
        )
    }, [id])

    const leadSubmit = useCallback((e) => {
        e.preventDefault();
        api.delete(`contatos/${id}`).then(
            response => {
                setSubmited(true)
                toast.success("Contato deletado com sucesso!", {
                    onClose: () => history.push("/contatos")
                })
            }
        )
            .catch(e => {
                toast.error('Contato não pode ser deletado')
            })
    }, []);

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
                    <h1>Deseja deletar este contato?</h1>

                    <ContactSection>

                        {!submited ? (
                            <form onSubmit={leadSubmit}>
                                <div className="section" key={contato?.id}>
                                    <div className="divNome">
                                        <h2>
                                            {contato?.nome}
                                        </h2>
                                    </div>
                                    <div className="divConteudo">
                                        <p>
                                            <strong>CPF: </strong>
                                            {contato?.cpf}
                                        </p>
                                        <p>
                                            <strong>E-mail: </strong>
                                            {contato?.email}
                                        </p>
                                        <p>
                                            <strong>Telefone: </strong>
                                            {contato?.telefone}
                                        </p>
                                    </div>
                                    
                                </div>
                                <button type="submit">Deletar</button>
                            </form>
                            
                        ) : (
                            <>
                                <div>
                                    <h2>Contato deletado!</h2>
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


export default DeleteContato;