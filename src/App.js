import React from 'react';
import {DndProvider}from 'react-dnd';
import createHTML5Backend from 'react-dnd-html5-backend';

import GlobalStyles from './styles/global'

import Header from './components/Header';
import Board from './components/Board';
function App() {
  return (
    <DndProvider backend={createHTML5Backend}>

    <Header></Header>
<Board></Board>
    <GlobalStyles/>

    </DndProvider>
  );
}

export default App;
