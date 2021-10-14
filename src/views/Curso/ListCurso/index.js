import api from "../../../services/api";

import HeaderComponent from '../../../conponents/HeaderComponent';
import FooterComponent from '../../../conponents/FooterComponentet';
import { Component } from 'react';
import { Container, ContactSection } from './style';

class ListCurso extends Component{

    state ={
        cursos: []
    }

    async componentDidMount(){
        const response = await api.get('cursos');

        this.setState ({ cursos: response.data });
    }

    render(){
        const { cursos } = this.state;
        return(
            <>
                <HeaderComponent/>
                <Container>
                <div className="first-section">
                    <h1>Lista de Cursos</h1>

                    <ContactSection>
                    {cursos.map(curso => (
                        <div className="card" key={curso.id}>
                            <div>
                                <h2>
                                    { curso.nome} 
                                </h2>
                                <p>
                                    { curso.categoria}
                                </p>
                            </div>
                        </div>
                    ))}
                    </ContactSection>

                </div>
                </Container>
                <FooterComponent/>
            </>
        )
    }
}


export default ListCurso;