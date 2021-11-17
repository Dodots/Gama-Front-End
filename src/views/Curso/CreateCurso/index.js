import { Container, ContactSection } from './style';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import { useState, useCallback} from 'react';

import api from "../../../services/api";
import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";



function CreateCurso() {
    const [data, setData] = useState({})
    const [submited, setSubmited] = useState(false)
    const history = useHistory()

    const categorias = {
        vazio: " ",
        EDUCACAO_DISTANCIA: "Educação a Distância",
        GRADUACAO: "Graduação",
        POS_GRADUACAO: "Pós Graduação",
        EDUCACAO_BASICA: "Educação Básica"
    }

    const leadSubmit = useCallback((e) => {
        e.preventDefault();
        api.post('/cursos', data).then(
            response => {
                setSubmited(true)
                toast.success("Curso criado com sucesso!",{
                    onClose :() => history.push("/cursos")
                })
            }            
        )
        .catch(e => {
            toast.error('Campo inválido ou Curso existente')
        })
    }, [data]);

        return (
            <>
            <HeaderComponent/>
            <Container>
            <div className="first-section">

                <div>
                    <h1>Adicionar Cursos</h1>
                </div>

                <ContactSection>
                <div className="section">
                    {!submited ? (
                    <>
                        
                        <form onSubmit={leadSubmit}>
                            
                            <input
                                type="text"
                                placeholder="nome"
                                onChange={e => setData({...data, nome: e.target.value })}
                            />
                            
                            <select defaultValue={categorias} placeholder="Categoria" onChange={e => setData({...data, categoria: e.target.value })}>
                                {Object.keys(categorias).map(key => (
                                <option key={key} value={key}>
                                    {categorias[key.valueOf()]}
                                </option>
                                ))}
                            </select>
                            <button type="submit">Cadastrar</button>
                        </form>
                    </>
                        ) : (
                    <>
                        <div>
                            <h2>Curso cadastrado!</h2>
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

export default CreateCurso;