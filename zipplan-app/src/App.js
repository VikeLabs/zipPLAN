import React, {Component} from 'react';
import "./App.css";
import Login from "./components/Login";

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div>
          <Login/>
        </div>
    )
  }
}

export default App
