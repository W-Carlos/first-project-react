import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyle';
import Routes from './routes'

// No react os componentes são como sanduiche, um tem que está dentro do outro
ReactDOM.render(
    <>
        <Routes/> 
        <GlobalStyle/>
    </>, 
    document.getElementById('root')
);


