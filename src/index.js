import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import GlobalStyle from './globalStyle';

// No react os componentes são como sanduiche, um tem que está dentro do outro
ReactDOM.render(
    <>
        <Home/> 
        <GlobalStyle/>
    </>, 
    document.getElementById('root')
);


