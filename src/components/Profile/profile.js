import React, { useState } from 'react'
import useGithub from '../../hooks/github-hooks'
import Repositories from '../Repositories/repositories'

import * as S from './styles'

function Profile() {

    const { githubState } = useGithub()

    return (
        <>
            <S.ProfileContainer>
                <S.ProfilePhoto src={githubState.user.avatar} />
                <S.ProfileInfo>
                    <h2>{githubState.user.name}</h2>
                    <h3>Username:
                        <a href={githubState.user.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {githubState.user.login}
                        </a>
                    </h3>
                    <h3>Company: <span>{githubState.user.company}</span></h3>
                    <h3>Location: <span>{githubState.user.location}</span></h3>
                    <h3>Blog:
                        <a href={githubState.user.blog}
                            target="_blank" rel="noreferrer">
                            {githubState.user.blog}
                        </a>
                    </h3>
                </S.ProfileInfo>
            </S.ProfileContainer>
            <S.ProfileCounts>
                <p>Followers: {githubState.user.followers}</p>
                <p>Following: {githubState.user.following}</p>
                <p>Gists: {githubState.user.public_gists}</p>
                <p>Repos: {githubState.user.public_repos}</p>
            </S.ProfileCounts>

            <S.ProfileAction>
                <button>Repositories</button>
                <button>Starred</button>
            </S.ProfileAction>
        </>
    )
}

export default Profile