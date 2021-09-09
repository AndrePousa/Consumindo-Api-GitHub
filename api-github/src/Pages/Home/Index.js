import React, {useState} from 'react'; //importando um hook
import axios from 'axios'; //importando um pacote
import * as S from './styled';
import { useHistory } from 'react-router-dom'; //controlar as paginas

//props, indica que o componente receberá propriedades
function App( ) {
  //definindo o estado do usuario, (passando o estado inicial do usuário)
  // variavel e função que mudará o valor
  const [usuario, setUsuario] = useState('');
 //salvando useHistory dentro da variavel history
  const history = useHistory(); 

  //começa como false, 
  const [ erro, setErro ] = useState(false);
  
  //Função que pegará o valor do estado.
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {

      const repositories = response.data;
      //Criei um array
      const repositoriesName = [];
      //percorrer o vetor repository 
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      }); 
      
      //Setar Um valor no local Storage.     //JSON.stringfy, pegar um objeto e transformar em uma string
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      //inserindo no history o caminho para o repositories
      history.push('/repositories');
    })
    //
    .catch(err => {
      setErro(true);
    });
}
  return (
    <S.HomeContainer>
      <S.Content>
    {/*fragment*/}
      {/*o que se passa para o componete são propriedades*/}          
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value) }/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      {/*Reinderização condicional / Se o erro for verdadeiro exiba o erro senão não exiba nada*/}
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
      </S.HomeContainer>
  );
}

export default App;
// useState é uma função que retorna um array com duas posições

//[ usuario, setUsuario ]
/* [valor do estado, função ] */