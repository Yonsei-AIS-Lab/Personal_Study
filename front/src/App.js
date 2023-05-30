import React, {useState, Component} from 'react';
import './App.css';
import Example1 from './example';


function App() {
/*
let [title,setTitle] = useState(['요일','요일2']);

const [inputData, setInputData] = useState([{
  menu1: '',
  menu2: '',
  menu3: ''
}])
*/
  return (
    <div className="App">
      <div className="black-nav">
        <div>MENU</div>
      </div>
      <div>
        <Example1/>
      </div>
    </div>
  );
}

export default App;
