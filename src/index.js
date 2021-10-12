import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyle';

// No react os componentes são como sanduiche, um tem que está dentro do outro
ReactDOM.render(
    <>
        <App /> <GlobalStyle/>
    </>, 
    document.getElementById('root')
);


