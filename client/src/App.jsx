import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Home,Login,Blog,Register} from './components/userpage'
const App = () => {
  return(
    <BrowserRouter>      
      <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/home" element={ <Home/> } />
          <Route exact path="/login" element={ <Login/> } />
          <Route exact path="/register" element={ <Register/> } />
          <Route exact path="/blog" element={ <Blog/> } />
      </Routes>
    </BrowserRouter>
  )

}

export default App