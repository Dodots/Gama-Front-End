import { useState, useEffect, useCallback } from "react";
import { Container, ContactSection } from './style';
import { toast } from 'react-toastify'

import api from "../../../services/api";
import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/78259-loading.json';

function DeleteCurso(props) {
    const [curso, setCurso] = useState();
    const { id } = props.match.params
    const [submited, setSubmited] = useState(false)
    const [load, setLoad] = useState([false])
    const history = useHistory()

    useEffect(() => {
        api.get(`cursos/${id}`).then(
            response => {
                setCurso(response.data)
                setLoad(false)
            }
        )
    }, [])

    const leadSubmit = useCallback((e) => {
        e.preventDefault();
        api.delete(`cursos/${id}`).then(
            response => {
                setSubmited(true)
                toast.success("Curso deletado com sucesso!",)               
            }
        )
            .catch(e => {
                toast.error('curso não pode ser deletado')
            })
    }, []);

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
                    <h1>Deseja deletar este curso?</h1>
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
                                    <button type="submit">Deletar</button>
                                </div>
                            </form>
                        ) : (
                            <>
                                <div>
                                    <h2>Curso deletado!</h2>
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