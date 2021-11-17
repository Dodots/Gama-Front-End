import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    margin: auto;

    .first-section{
        text-align: center;
        height: 60vh;
    }
    h1{
        font-size: 30px;
        margin-bottom: 15px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .hidden {
        display: none; 
    }
`

export const ContactSection = styled.section`
    .section{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    
        h2{
        text-align: center;
        margin: 30px;
        }

        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            padding: 5% 5% 5% 5%;
            background-color: rgba(30, 144, 255, 0.2);
            border-radius: 20px;
            width: 500px;
        }
        
        input{
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
            width: 300px;
            color: black;
        }
        select{
            margin: 10px;
            height: 40px;
            border-radius: 5px;
            width: 325px;
        }
        button{
            margin-top: 10px;
            margin-left: 10px;
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
    }
`