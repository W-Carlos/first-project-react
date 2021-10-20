import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Users from './containers/Users'
import GlobalStyle from './globalStyle';

// No react os componentes são como sanduiche, um tem que está dentro do outro
ReactDOM.render(
    <>
        <Users/> 
        <GlobalStyle/>
    </>, 
    document.getElementById('root')
);


