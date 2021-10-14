import api from "../../../services/api";

import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { Component } from "react";
import { Container, ContactSection } from '../ListContato/style';

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
                    <h1>Listar Contatos</h1>

                    <ContactSection>
                    {contatos.map(contato => (
                        <div className="card" key={contato.id}>
                            <h2>
                                <strong>Nome: </strong>
                                {contato.nome} 
                            </h2>
                            <p>
                                <strong>CPF: </strong>
                                {contato.cpf}
                            </p>
                            <p>
                                <strong>CEP: </strong>
                                {contato.cep}
                            </p>
                            <p>
                                <strong>Lougradouro: </strong>
                                {contato.lougradouro}
                            </p>
                            <p>
                                <strong>Numero: </strong>
                                {contato.numero}
                            </p>
                            <p>
                                <strong>Bairro: </strong>
                                {contato.bairro}
                            </p>
                            <p>
                                <strong>Cidade: </strong>
                                {contato.cidade}
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
                                <strong>Whatsapp: </strong>
                                {contato.whatsapp}
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