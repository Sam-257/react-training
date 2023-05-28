import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TodoList from './Components/TodoList';
import Form from './Components/Form';
import LoginState from './Components/LoginState';
import Demo from './Components/Demo';
import Movie from './Components/Movie';
import {moviesList} from './Data/movies'
import UseRefDemo from './Components/UseRefDemo';
import UseCallback from './Components/UseCallbackDemo/UseCallBackDemo';
import UseMemoDemo from './Components/UseMemoDemo';
import Layout from './Components/Layout';
import Comments from './Components/ApiDemo/Comments';
import Auth from './Components/ApiDemo/Auth';
import NavBar from './Components/NavBar';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/ApiDemo/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Demo /> } />
            <Route element={<PrivateRoute />}>
              <Route path="movie" element={<Movie moviesList={moviesList} />} />
              <Route path="loginstate" element={<LoginState />} />
              <Route path="form" element={<Form />} />
              <Route path="todo" element={<TodoList />} />
              <Route path="useRef" element={<UseRefDemo />} />
              <Route path="useCallback" element={<UseCallback />} />
              <Route path="useMemo" element={<UseMemoDemo />} />
              <Route path="customHook" element={<Layout />} />
              <Route path="comments" element={<Comments />} />
              <Route path="secure" element={<Auth />} />
            </Route>
          </Route>
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
