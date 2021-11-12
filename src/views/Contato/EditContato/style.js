import styled from "styled-components";

export const Container = styled.section`
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
  text-align: center;
  
  .section{
    display: flex;
    justify-content: center;

    .divStatus{
        display: flex;

        p{
            margin-top: 20px;
        }
    }

    h2{
        text-align: center;
        margin: 30px;
    }
    .msgSucess{
        height: 50vh;
    }

    form{
        display: flex;
        flex-direction: column;
        flex-flow: row wrap;
        justify-content: center;
        padding-right: 10%;
        padding-left: 10%;
        margin-bottom: 80px;
        background-color: rgba(30,144,255,0.2);
        width: 800px;
        padding: 30px;
        border-radius: 20px;
      
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
  }
`