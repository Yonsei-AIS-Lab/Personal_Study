import React, {useState, Component} from 'react';
import './App.css';
import Example3 from './example3';


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
        <Example3/>
      </div>
    </div>
  );
}

export default App;
