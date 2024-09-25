import styled from "styled-components"
import background from "../../assets/background.jpg"
export const ContainerHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: radial-gradient(circle, #add8e6 30%, rgba(0, 100, 193, 0.5) 60%, black 200%);
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

` 
export const ContainerInputs = styled.div`
    width: 350px;
    height: 470px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    border: 0.1px solid rgba(0, 0, 0, 0.1);
`
export const ContentInputs = styled.form`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: auto;
    gap: 16px;

`
export const Title = styled.h1`
    text-align: center;
    margin-top: 24px;
    color: white;
`   
export const SubTitle = styled.h2`
    color: white;

`
export const Inputs = styled.input`
    color: black;
    height: 35px;
    border-radius: 4px;
    border: none;
    padding: 4px;
    border-radius: 4px;
    border: 0.1px solid rgba(0, 0, 0, 0.1);
`
export const ButtonLogin = styled.button`
    background-color: #003465;
    color: white;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 40px;
    &:hover{
    background-color: #01294f;
    }
`
export const Labels = styled.label`
    
    display: flex;
    flex-direction: column;
    color: white;
`

export const Forgot = styled.a`
    text-decoration: none; 
    color: white;      
    margin-top: 6px;
`
export const TitleLabel = styled.h3`
    margin-bottom: 6px;
`