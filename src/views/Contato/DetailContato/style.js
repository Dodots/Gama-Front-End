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
        height: 40px;
        width: 100px;
        border-radius: 5px;
        background-color: #0C6DA9;
        color: white;
        border: 0;
        cursor: pointer;

        :hover{
          background-color: #00BFFF;
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

    .card{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 400px;
        height: 600px;
        align-items: center;
        text-align: left;
        margin: 13px;
        border: solid;
        border-color: white;
        border-radius: 20px;
        border-width: 2px;
        padding: 10px;
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