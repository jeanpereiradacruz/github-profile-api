import styled from "styled-components";

export const RepoItemContainer = styled.div`
    font-family: sans-serif;
    height: 150px;
    width: 380px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 10px;
    border: 1px solid #CCC;
    border-radius: 10px;
    background-color: #fff;
`;
export const RepoItemTitle = styled.h2`
    font-size: 20px;
    margin-top: 10px;
`;
export const RepoItemFullName = styled.p`
    font-size: 15px;
    font-weight: bold;
    margin-top: 5px;
`;
export const RepoItemLink = styled.a`
    margin-top: 5px;
    font-size: 15px;    
    color: #0000aa;
    font-weight: bold;
    text-decoration: none;
`;