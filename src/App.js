

import './App.css';
import React from 'react';
import List from './pages/list';
import Lifecycle from './pages/lifecycle';
import ErrorBoundary from './pages/errorboundary';
import Counter1 from './new';
import EnhancedLike from './Like';
import Comment from './comment';
import Error from './error';
import BasicButtons from './button';
import { Counters } from './counter';
import Home from './pages/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './pages/contact';
import Services from './pages/services';


// import Contact from './pages/contact';

function App(){
  return(
    <div>
      <List/>
      <Lifecycle/>
      <ErrorBoundary/>
      <Counter1/>
      <EnhancedLike/>
      <Comment/>
      <Error/>
      <BasicButtons/>
      <Counters/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/c' element={<Contact/>}/>
        <Route path='/s' element={<Services/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;