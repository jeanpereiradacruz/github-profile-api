import React from "react";
import * as S from "./styles";

const RepositoryItem = ({ name, fullName, linkToRepo }) => {

  const shortenLink = (link) => {
    return link.slice(18)
  }

  return (
    <S.RepoItemContainer>
      <S.RepoItemTitle>{name}</S.RepoItemTitle>
      <S.RepoItemFullName>{fullName}</S.RepoItemFullName>
      <S.RepoItemLink href={linkToRepo} target="_blank" rel="noreferrer">
        {shortenLink(linkToRepo)}
      </S.RepoItemLink>
    </S.RepoItemContainer>
  );
};

export default RepositoryItem;
