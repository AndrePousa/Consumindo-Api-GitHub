/*Armazana os componentes estilizados, 
  crio components customizados estilosos */ 
import styled from 'styled-components'; //componentes stilizados 
import { Link } from 'react-router-dom';

//exportando constantes para acessar de dentro do componente
export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto; // 0 auto = centralizado 
`
//const title receberá a tag h1, será uma tag <h1>
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`
//tag para reinderização da aplicação. 
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;
//lista onde aparecerão os repositorios
export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;
`;

//estilizando o componente do ReactRouterDom colocando entre ( )
export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
`;