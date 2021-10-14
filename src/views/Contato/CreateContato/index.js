import api from "../../../services/api";
import { useState, useCallback, useEffect} from 'react';
import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { Container, ContactSection } from './style';

function CreateContato() {

    const [data, setData] = useState({})
    const [submited, setSubmited] = useState(false)
    const [cursos, setCursos] = useState([])

    const status = {
        NOVO: "Novo",
        EM_ATENDIMENTO: "Em Atendimento",
        CONTRATADO: "Contratado",
        DESISTENTE: "Desistente"
    }

    useEffect(() => {
        api.get('/cursos').then(
          response => {
            setCursos(response.data)
            console.log(response.data)
          }
        )
      }, [])

    const leadSubmit = useCallback((e) => {
        e.preventDefault();
        api.post('/contatos', data).then(
            response => {
            if (response.status === 201) setSubmited(true)
            }
        )
        }, [data]);

        return (
            <>
            <HeaderComponent/>
            <Container>
            <div className="first-section">
                <div>
                    <h1>Adicionar Contato</h1>
                </div>

                <ContactSection>
                <div className="section">
                    {!submited ? (
                    <>



                        <div >
                        <form onSubmit={leadSubmit}>
                            <input
                                type="text"
                                placeholder="nome"
                                onChange={e => setData({...data, nome: e.target.value })}
                            />

                        <select
                            onChange={e => setData({...data, curso_id: e.target.value })}
                        >
                            {cursos.map(curso => (
                            <option key={curso.id} value={curso.id}>
                                {curso.nome}
                            </option>
                            ))}
                        </select>

                            <input
                                type="email"
                                placeholder="E-mail"
                                onChange={e => setData({...data, email: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Telefone"
                                onChange={e => setData({...data, telefone: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Whatsapp"
                                onChange={e => setData({...data, whatsapp: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="CPF"
                                onChange={e => setData({...data, cpf: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="CEP"
                                onChange={e => setData({...data, cep: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Estado"
                                onChange={e => setData({...data, uf: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Cidade"
                                onChange={e => setData({...data, cidade: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Bairro"
                                onChange={e => setData({...data, bairro: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Rua"
                                onChange={e => setData({...data, lougradouro: e.target.value })}
                            />
                            


                            <input
                                type="text"
                                placeholder="Numero"
                                onChange={e => setData({...data, numero: e.target.value })}
                            />
                            <div className="divStatus">
                                <p>Status:</p>
                                <select value={status} onChange={e => setData({...data, status: e.target.value })}>
                                    {Object.keys(status).map(key => (
                                    <option key={key} value={key}>
                                        {status[key]}
                                    </option>
                                    ))}
                                </select>
                            </div>
                                           
                        <button type="submit">Cadastrar</button>
                        </form>
                        </div>  
                    </>
                        ) : (
                    <>
                        <div className="msgSucess">
                            <h2> Seu curso foi realizada com sucesso!</h2>
                        </div>
                    </>
                    )}
                </div>
                </ContactSection>
            </div>
            </Container>
            <FooterComponent/>
            </>
        )
    
}

export default CreateContato;