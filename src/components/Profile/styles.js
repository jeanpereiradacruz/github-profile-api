import styled from "styled-components";

export const ProfileContainer = styled.div`
    margin-top: 2px;
    display: flex;
    align-items: flex-start ;
`
export const ProfilePhoto = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 20px 15px;
`
export const ProfileInfo = styled.div`
    height: 160px;
    width: 50%;
    margin: 20px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    a{
        margin-left: 5px;
        text-decoration: none;
    }

`
export const ProfileCounts = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    margin: -10px 15px;

    p{
        margin-left: 10px;
    }
`

export const ProfileAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 20px;
    width: 200px;
    margin-top: 2rem;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        height: 40px;
        width: 60%;
        margin-left: 10px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 15px;
        padding: 20px;
        cursor: pointer;

        &:hover{
            color: #0000aa;
        };

        &:focus{
            color: #0000aa;
        };

        &:nth-child(2){
            color: #ccc;
        }

    }

`




