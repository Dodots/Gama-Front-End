import api from "../../../services/api";
import { useState, useCallback} from 'react';
import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { Container, ContactSection } from './style';

function CreateCurso() {

    const [data, setData] = useState({})
    const [submited, setSubmited] = useState(false)

    const categorias = {
        EDUCACAO_DISTANCIA: "Educação a Distância",
        GRADUACAO: "Graduação",
        POS_GRADUACAO: "Pós Graduação",
        EDUCACAO_BASICA: "Educação Básica"
    }
    const hidden = "";

    const leadSubmit = useCallback((e) => {
        e.preventDefault();
        api.post('/cursos', data).then(
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
                    <h1>Adicionar Cursos</h1>
                </div>

                <ContactSection>
                <div className="section">
                    {!submited ? (
                    <>
                        
                        <form onSubmit={leadSubmit}>
                            
                            <input
                                type="text"
                                placeholder="nome do curso"
                                onChange={e => setData({...data, nome: e.target.value })}
                            />
                            
                            <select value={categorias} onChange={e => setData({...data, categoria: e.target.value })}>
                                {Object.keys(categorias).map(key => (
                                <option key={key} value={key}>
                                    {categorias[key]}
                                </option>
                                ))}
                            </select>


                            <button type="submit">Cadastrar</button>
                        </form>
                    </>
                        ) : (
                    <>
                        <div>
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

export default CreateCurso;