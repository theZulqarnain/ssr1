import React from 'react';
import HomePage from './pages/HomePage';
import App from './App'
import UsersListPage from './pages/usersListPage'; 
import NotFoundPage from './pages/NotFoundPage';

export default [
    {
        ...App,
    routes : [
        {
            ...HomePage,
            path:'/',
            exact:true
        },
        {   
            ...UsersListPage,
            path:'/users',
        },
        {
            ...NotFoundPage
        }
    ]
    }
]