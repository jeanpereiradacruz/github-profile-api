import React, { useEffect, useState } from "react";
import RepositoryItem from "../RepositoryItem/repositoryItem";
import * as S from "./styles";

import useGitHub from '../../hooks/github-hooks'

function Repositories() {

  const { githubState, getUserStarred, getUserRepos } = useGitHub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchRepos(githubState.repositories)
  }, [githubState.user.login])

  return (
    <>
      {hasUserForSearchRepos ? (
        <S.RepoContainer>
          {githubState.repositories.map((item) => (
            <RepositoryItem
              key={item.id}
              name={item.name}
              fullName={item.full_name}
              linkToRepo={item.html_url} />
          ))}

        </S.RepoContainer>
      ) : (
        <></>
      )}

    </>
  )
}

export default Repositories