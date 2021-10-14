import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    margin: auto;

    .first-section{
        text-align: center;
    }

    h1{
        font-size: 30px;
        margin-bottom: 15px;
    }
`


export const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgba(30,144,255,0.2);
    padding: 10px;
    border-radius: 20px;

    .card{
        width: 500px;
        align-items: center;
        text-align: left;
        padding: 3em 0 3em 0;
        margin: 15px;
    }

    h2{
        font-size: 15pt;
        margin: 10px;
    }

    p{
        margin: 5px;
    }
`