import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';

import ListCurso from './views/Curso/ListCurso';
import CreateCurso from './views/Curso/CreateCurso';
import EditCurso from './views/Curso/EditCurso';
import DeleteCurso from './views/Curso/DeleteCurso';
import DetailCurso from './views/Curso/DetailCurso';

import ListContato from './views/Contato/ListContato';
import CreateContato from './views/Contato/CreateContato';
import DetailContato from './views/Contato/DetailContato';
import EditContato from './views/Contato/EditContato';
import DeleteContato from './views/Contato/DeleteContato';

function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />   
                <Route path="/cursos/" exact component={ListCurso} />
                <Route path="/cursos/add" exact component={CreateCurso} />
                <Route path="/cursos/edit/:id" exact component={EditCurso} />
                <Route path="/cursos/delete/:id" component={DeleteCurso} />
                <Route path="/cursos/detail/:id" component={DetailCurso} />
                
                <Route path="/contatos/" exact component={ListContato} />
                <Route path="/contatos/add" exact component={CreateContato} />
                <Route path="/contatos/detail/:id" exact component={DetailContato} />
                <Route path="/Contatos/edit/:id" exact component={EditContato} />
                <Route path="/Contatos/delete/:id" exact component={DeleteContato} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;