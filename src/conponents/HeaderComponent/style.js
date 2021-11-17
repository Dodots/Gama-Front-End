import styled from "styled-components";

export const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    

    .divImg{
        width: 80px;
    }

    img{
        width: 150px;
        height: auto;
        margin-right: 200px;
    }

    .link-content{
        align-items: self-start;
        margin-right: 40px;
        width: 600px;

        a{
            margin: 12px;
            text-decoration: none;
            background-color: #0C6DA9;
            color: #fff;
            padding: 10px;
            padding-left: 50px;
            padding-right: 50px;
            border-radius: 5px;
            transition: 0.3s;

            :hover{
                background-color: #00BFFF;
            }
        }
    }
`