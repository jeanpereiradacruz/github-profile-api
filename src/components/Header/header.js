import React, { useState } from 'react'
import useGithub from '../../hooks/github-hooks'
import * as S from './styles'

function Header() {

    const { getUser } = useGithub();
    const [userNameForSearch, setUserNameForSearch] = useState();

    const searchUser = () => {
        if (!userNameForSearch) return;
        getUser(userNameForSearch)
        setUserNameForSearch("")
    }

    return (
        <S.HeaderContainer>
            <S.HeaderTitle>Github Interface</S.HeaderTitle>
            <S.HeaderAction>
                <S.HeaderInput
                    type="text"
                    placeholder="Informe o usuário"
                    value={userNameForSearch}
                    onChange={(e) => setUserNameForSearch(e.target.value)}
                    autoFocus />
                <S.HeaderButton
                    type="submit"
                    onClick={searchUser}
                >Buscar</S.HeaderButton>
            </S.HeaderAction>
        </S.HeaderContainer>
    )
}

export default Header