import api from "../../../services/api";
import { useState, useCallback, useEffect} from 'react';
import { toast } from 'react-toastify'
import HeaderComponent from "../../../conponents/HeaderComponent"
import FooterComponent from "../../../conponents/FooterComponentet";
import { Container, ContactSection } from './style';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/78259-loading.json';

function EditCurso(props) {

    const [data, setData] = useState({})
    const [submited, setSubmited] = useState(false)
    const [load, setLoad] = useState([false])
    const [curso, setCurso] = useState();
    const {id} = props.match.params
    const history = useHistory()

    useEffect(() => {
        api.get(`cursos/${id}`).then(
            response => {
                setCurso(response.data)
                setLoad(false)
            }
        )
    }, [id])

    const categorias = {
        EDUCACAO_DISTANCIA: "Educação a Distância",
        GRADUACAO: "Graduação",
        POS_GRADUACAO: "Pós Graduação",
        EDUCACAO_BASICA: "Educação Básica"
    }

    const leadSubmit = useCallback((e) => {
        e.preventDefault();
        api.put(`cursos/${id}`, data).then(
            response => {
                setSubmited(true)
                toast.success("Curso editado com sucesso!")               
            }
        )
            .catch(e => {
                toast.error('curso não foi editado')
            })
    }, [data]);

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
        <HeaderComponent/>
        <Container>
        <div className="first-section">

            <div>
                <h1>Editar Curso</h1>
            </div>

            <ContactSection>
            <div className="section">
                {!submited ? (
                <>
                    
                    <form onSubmit={leadSubmit}>
                        
                        
                        <input
                            type="text"
                            placeholder="nome do curso"
                            defaultValue={curso?.nome}
                            onChange={e => setData({...data, nome: e.target.value })}
                        />
                        
                        <select 
                        defaultValue={curso?.categoria} 
                        onChange={e => setData({...data, categoria: e.target.value })}>
                            {Object.keys(categorias).map(key => (
                            <option key={key} value={key}>
                                {categorias[key]}
                            </option>
                            ))}
                        </select>


                        <button type="submit">Editar</button>
                    </form>
                </>
                    ) : (
                <>
                    <div>
                        <h2> Seu curso foi editado com sucesso!</h2>
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


export default EditCurso;