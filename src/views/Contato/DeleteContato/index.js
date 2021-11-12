import api from "../../../services/api";

import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { useState, useEffect } from "react";
import { Container, ContactSection } from './style';

function DeleteContato(props){
    const [contato, setContato] = useState();
    const {id} = props.match.params

    useEffect(() => {
        api.get(`contatos/${id}`).then(
            response => {
                setContato(response.data)
            }
        )
    }, [id])

        return(
            <>
                <HeaderComponent/>
                <Container>
                <div className="first-section">
                    <h1>Contato</h1>

                    <ContactSection>
                        <div className="card" key={contato?.id}>
                            <h2>
                                {contato?.nome} 
                            </h2>
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
                                {contato?.curso_id}
                            </p>
                            
                        </div>
                        <button type="submit">Deletar</button>
                        
                    </ContactSection>
                </div>                
                </Container>
                <FooterComponent/>
            </>
        )
    
}


export default DeleteContato;