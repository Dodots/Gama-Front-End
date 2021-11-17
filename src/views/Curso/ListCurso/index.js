import api from "../../../services/api";

import HeaderComponent from '../../../conponents/HeaderComponent';
import FooterComponent from '../../../conponents/FooterComponentet';
import { useEffect, useState } from 'react';
import { Container, ContactSection } from './style';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/78259-loading.json';


function ListCurso() {
    const [cursos, setcursos] = useState([])
    const [load, setLoad] = useState([false])
    const history = useHistory()

    useEffect(() => {
        setLoad(true)
        api.get('/cursos').then(
            response => {
                setcursos(response.data)
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
                    <h1>Lista de Cursos</h1>
                    <div className="button_add">
                        <button
                            className="card__btn2"
                            onClick={() => history.push("/cursos/add")}>
                            Adicionar
                        </button>
                    </div>


                    <ContactSection>


                        <table id="customers">
                            <tr>
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Ação</th>
                            </tr>
                            {cursos.map(curso => (
                                <tr key={curso.id}>
                                    <td>{curso.nome}</td>
                                    <td>{curso.categoria}</td>
                                    <td className="tdButton" >
                                        <button
                                            className="card__btn"
                                            onClick={() => history.push("/cursos/detail/" + curso.id)}>
                                            Detalhes
                                        </button>
                                    </td>
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



export default ListCurso;