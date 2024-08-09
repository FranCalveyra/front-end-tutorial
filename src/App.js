import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {TodoList} from "./pages/TodoList";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<TodoList/>} ></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
