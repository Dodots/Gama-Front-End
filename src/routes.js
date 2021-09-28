import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Curso from './views/Curso';
import Contato from './views/Contato';

function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />   
                <Route path="/cursos" component={Curso} />
                <Route path="/contatos" component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;