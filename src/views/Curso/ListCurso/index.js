import api from "../../../services/api";

import HeaderComponent from "../../../conponents/HeaderComponent";
import FooterComponent from "../../../conponents/FooterComponentet";
import { Component } from "react";

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
                <div>
                    <h1>Listar Cursos</h1>
                    {cursos.map(curso => (
                        <li key={curso.id}>
                            <h2>
                                <strong>Título do curso: </strong>
                                {curso.nome} 
                            </h2>
                            <p>
                                <strong>Categoria: </strong>
                                {curso.categoria}
                            </p>
                        </li>
                    ))}
                </div>
                <FooterComponent/>
            </>
        )
    }
}


export default ListCurso;