import HeaderComponent from "../../conponents/HeaderComponent";
import FooterComponent from "../../conponents/FooterComponentet";
import ImgHome from '../../assets/img/Home.png'

import { Container } from './style'

function Home(){

    
    return(
        <>
            <HeaderComponent/>
                <Container>
                    <div className="first-section">
                        <h1>Arte do Ensino</h1>
                        <div className="divImg">
                            <img src={ ImgHome } alt="Logotipo" />
                        </div> 
                    </div>
                                  
                </Container>
            <FooterComponent/>
        </>
    )
}

export default Home;