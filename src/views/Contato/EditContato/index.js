import api from "../../../services/api";
import { useState, useCallback, useEffect} from 'react';
import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { Container, ContactSection } from './style';

function EditContato(props) {

    const [contato, setContato] = useState();
    const {id} = props.match.params
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
        api.get(`contatos/${id}`).then(
            response => {
                setContato(response.data)
            }
        )
    }, [])

    useEffect(() => {
        api.get('/cursos').then(
          response => {
            setCursos(response.data)
            console.log(response.data)
          }
        )
      }, [id])

    const leadSubmit = useCallback((e) => {
        e.preventDefault();
        api.put(`/contatos/${id}`, data).then(
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
                                value={contato?.nome}
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
                                value={contato?.email}
                                onChange={e => setData({...data, email: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Telefone"
                                value={contato?.telefone}
                                onChange={e => setData({...data, telefone: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Whatsapp"
                                value={contato?.whatsapp}
                                onChange={e => setData({...data, whatsapp: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="CPF"
                                value={contato?.cpf}
                                onChange={e => setData({...data, cpf: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="CEP"
                                value={contato?.cep}
                                onChange={e => setData({...data, cep: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Estado"
                                value={contato?.uf}
                                onChange={e => setData({...data, uf: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Cidade"
                                value={contato?.cidade}
                                onChange={e => setData({...data, cidade: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Bairro"
                                value={contato?.bairro}
                                onChange={e => setData({...data, bairro: e.target.value })}
                            />

                            <input
                                type="text"
                                placeholder="Rua"
                                value={contato?.lougradouro}
                                onChange={e => setData({...data, lougradouro: e.target.value })}
                            />
                            


                            <input
                                type="text"
                                placeholder="Numero"
                                value={contato?.numero}
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
                                           
                        <button type="submit">Editar</button>
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

export default EditContato;