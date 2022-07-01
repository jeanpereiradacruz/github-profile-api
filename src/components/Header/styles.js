import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 150px;

`
export const HeaderTitle = styled.h1`
    color: #2B4162;
    font-size: 3rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    padding: 1rem;
`

export const HeaderAction = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center ;
`

export const HeaderInput = styled.input`
    width: 50%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #CCC;
    border-radius: 5px;
    padding: 5px;
    font-size: 1rem;
    color: #FFF;
    background-color: #2B4162;
    outline: none;

    ::placeholder{
        color: #CCC;
    }
`

export const HeaderButton = styled.button`
    width: 15%;
    height: 3rem;
    margin-left: 1rem;
    border-radius: 0.5rem;
    background-color: #2B4162;
    color: #FFF;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #CCC;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
`