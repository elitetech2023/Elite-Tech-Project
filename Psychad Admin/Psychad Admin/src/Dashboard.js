import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './Screens/Home';
import Notifications from './Screens/Notifications';
import Book from './Screens/Book';
import Life from './Screens/Life';
import "./Style/Dashboard.css"
import { Route, Routes } from 'react-router-dom';

function Dashboard() {
  return (

      <div>
        <Header/>
        <Sidebar>
        <Route  path="/home"element={<Home/>}/>
        <Route  path="/home"element={<Home/>}/>
        <Route  path="/notifications"element={<Notifications/>}/>
        <Route  path="/book"element={<Book/>}/>
        <Route  path="/life"element={<Life/>}/>
        </Sidebar>
      </div>
    
    
    
  )
}

export default Dashboard

