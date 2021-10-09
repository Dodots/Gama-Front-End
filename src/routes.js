import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import ListCurso from './views/Curso/ListCurso';
import IndexContato from './views/Contato/ListContato';
import CreateCurso from './views/Curso/CreateCurso';
import CreateContato from './views/Contato/CreateContato'

function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />   
                <Route path="/cursos" component={ListCurso} />
                <Route path="/Addcursos" component={CreateCurso} />
                
                <Route path="/contatos" component={IndexContato} />
                <Route path="/Addcontatos" component={CreateContato} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router;