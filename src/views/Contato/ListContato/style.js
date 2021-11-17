import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 70vh;
    margin: auto;
    width: 80%;

    .card__btn2{
        margin: 5px;
        width: 90px;
        height: 45px;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
    }

    .button_add{
        text-align: center;
        padding-left: 75vh;
    }
    

    h1{
        font-size: 30px;
        text-align: center;
        margin-bottom: 15px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`


export const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
    margin-bottom: 25px;


    #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 15px;
        width: 100%;
        overflow: hidden;
    }

    #customers td, #customers th {
        padding: 8px;
    }

    #customers tr:nth-child(even){background-color: #f2f2f2;}

    #customers tr:hover {background-color: #04B59A;}

    #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04B59A;
        color: white;
    }

    .card__btn{
        margin: 10px;
        width: 65px;
        height: 25px;
        border-radius: 5px;
        cursor: pointer;
    }



    .card{
        width: 900px;
        height: 400px;
        margin: 13px;
        border: solid;
        border-color: white;
        border-radius: 20px;
        border-width: 2px;
        padding: 10px;
    }

    h2{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 15pt;
        margin: 5px;
        margin-bottom: 9px;
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin: 5px;
        margin-bottom: 9px;
    }

    
`