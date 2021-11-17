import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;

    .first-section{
        text-align: center;
    }

    h1{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 30px;
        margin-bottom: 15px;
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
        background-color:  #0003;
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
    background-color: rgba(30,144,255,0.2);
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 25px;
    max-height: 76%;
    min-width: 300px;

    .divConteudo{
        height: 400px;
        display: grid;
    }

    .card{
        display: grid;
        align-content: space-between;
        width: auto;
        height: auto;
        align-items: center;
        text-align: left;
        margin: 13px;
        padding: 10px;
    }

    h2{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 20pt;
        text-align: center;
        margin-bottom: 1em;

    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 15pt;
        margin-left: 55px;
        margin-right: 55px;
        margin-bottom: 10px;
    }
`