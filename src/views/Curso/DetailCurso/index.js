import api from "../../../services/api";

import HeaderComponent from '../../../conponents/HeaderComponent';
import FooterComponent from '../../../conponents/FooterComponentet';
import { useEffect, useState } from 'react';
import { Container, ContactSection } from './style';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/78259-loading.json';

function DetailCurso(props) {
    const [curso, setcursos] = useState([])
    const [load, setLoad] = useState([false])
    const { id } = props.match.params
    const history = useHistory()

    useEffect(() => {
        api.get(`cursos/${id}`).then(
            response => {
                setcursos(response.data)
                setLoad(false)
            }
        )
    }, [id])

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