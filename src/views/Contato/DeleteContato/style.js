import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;

    .first-section{
        text-align: center;
        height: 60vh;
    }

    h1{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 30px;
        margin-bottom: 2em;
    }
    button{
        margin: 5px;  
        margin-bottom: 15px;
        width: 90px;
        height: 45px;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        background-color:  red;

        transition: 0.3s;

        :hover{
          background-color: #00000087;
        }
    }
`


export const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 25px;
    max-height: 76%;
    min-width: 300px;
    

    .divConteudo{
        height: 150px;
        display: grid;
    }

    .divNome{
        text-align: center;
        margin-bottom: 2em;
    }

    .section{
        display: flex;
	    flex-direction: column;
        align-items: center;
        background-color: rgba(30,144,255,0.2);
        border-radius: 15px;
        margin-bottom: 2em;
    }

    h2{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 20pt;
        margin: 10px;
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 15pt;
        margin-left: 55px;
        margin-right: 55px;
        margin-bottom: 10px;
    }


`