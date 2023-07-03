import React from 'react';
import { Route, Routes} from 'react-router-dom';


// import {Header,Footer} from './component';
import Header from './component/Header';


// import {Home,Customer,Company,Manage,Mypage,Join,Login} from './container';
import Home from './container/Home';
import Customer from './container/Customer';
import Company  from './container/Company';
import Manage  from './container/Manage';
import Mypage from './container/Mypage';
import Join from './container/Join';
import Login from './container/Login';

import "./style/App.css";

const App = (props) => {
  return (
    <div>
      <Header/>
        <div id ='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/company" element={<Company />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        </div>
    </div>
  );
};

export default App;