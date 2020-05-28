import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function Repositories() {
    const history = useHistory();
    /* useState é um Hook que te permite adicionar o state do React a um componente de função. 
     */
    const [ repositories, setRepositories ] = useState([]);
    
    /*  O que o useEffect faz? Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas depois da renderização
    */
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/')
        }
        
    }, []);

    return (
        <S.Container>
        <S.Title>Repositories</S.Title>
        <S.List>
           { repositories.map (repository => {
               return (
                   <S.ListItem>Repositório: { repository }</S.ListItem>
               )
            })}
        </S.List>
        <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
        
    );
}