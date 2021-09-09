//useEffect, monitora uma mudança de uma variavel, disparando uma função quando a variavel for alterada. 
import React, { useEffect, useState } from 'react'; 

 // S, tudo será acessado pelo S: ex : <S.Title>
import * as S from './styled';

import { useHistory } from 'react-router-dom';

export default function Repositories() {
  const history = useHistory();
  //definindo um estado para repositories
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    //armazena dentro de repositoriesName o valor que está no localStorage 'repositoriesName'
    let repositoriesName = localStorage.getItem('repositoriesName');
    //condicional de direcionanto de erros
    if(repositoriesName !== null) {
      //transformar novamente em um objeto.
      repositoriesName = JSON.parse(repositoriesName);

      setRepositories(repositoriesName);
      //limpando o Storage
      localStorage.clear();
    } else {
      history.push('/')
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {/*mapeando os elementos, exiba uma lista*/}
        { repositories.map(repository => {
          return (
            <S.ListItem>Repositório: { repository }</S.ListItem>
          )
        }) }
      </S.List>
      {/* Link estilizado */}
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}