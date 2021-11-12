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
    }
`

export const ContactSection = styled.section`


    .section{
	    display: flex;
	    flex-direction: column;
        align-items: center;
        
    
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

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            background-color: rgba(30,144,255,0.2);
            border-radius: 20px;
            margin: 20px;
            width: 400px;
            height: 200px;
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
            background-color: red;
            color: white;
            border: 0;
            cursor: pointer;

            :hover{
                background-color: #a30000;
            }
        }
    }
`