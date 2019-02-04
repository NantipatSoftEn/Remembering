import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import Dashbord from './containers/Dashbord';

import CountTodo from './containers/CountTodo';
import VisibleCountTodo from './containers/VisibleCountTodo';

import configureStore from './store/configureStore';
import {Provider } from 'react-redux';

const store =  configureStore();

const AppRouter = () => (
    <Provider store={store}>
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
        <Dashbord/>
        <CountTodo/>
        <VisibleCountTodo/>
    </div>
    </Provider>
);

export default AppRouter;