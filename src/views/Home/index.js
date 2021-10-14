import HeaderComponent from "../../conponents/HeaderComponent";
import FooterComponent from "../../conponents/FooterComponentet";

import { Container } from './style'

function Home(){

    
    return(
        <>
            <HeaderComponent/>
                <Container>
                    <div className="first-section">
                        <h1>Home</h1>  
                    </div>
                                  
                </Container>
            <FooterComponent/>
        </>
    )
}

export default Home;