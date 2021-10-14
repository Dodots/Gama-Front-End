import api from "../../../services/api";

import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { Component } from "react";
import { Container, ContactSection } from './style';

class IndexContato extends Component{

    state ={
        contatos: []
    }

    async componentDidMount(){
        const response = await api.get('contatos');

        this.setState ({ contatos: response.data });
    }

    render(){
        const { contatos } = this.state;
        return(
            <>
                <HeaderComponent/>
                <Container>
                <div className="first-section">
                    <h1>Lista de Contatos</h1>

                    <ContactSection>
                    {contatos.map(contato => (
                        <div className="card" key={contato.id}>
                            <div>
                                <h2>
                                    {contato.nome} 
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


export default IndexContato;