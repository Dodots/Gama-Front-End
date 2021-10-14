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
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 25px;

    .card{
        display: flex;
        justify-content: center;
        width: 250px;
        height: 150px;
        align-items: center;
        text-align: center;
        margin: 13px;
        border: solid;
        border-color: white;
        border-radius: 20px;
        border-width: 2px;
    }

    h2{
        font-size: 15pt;
        margin-bottom: 10px;
    }
`