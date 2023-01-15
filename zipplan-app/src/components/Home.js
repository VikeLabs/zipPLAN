import React, {Component} from 'react';
import "../styles/Login.css";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleClick =()=>{
        this.props.log_out();
    }

    render(){
        return(
            <div>
                <h2>Welcome {this.props.name}</h2>
                <button type={"button"} onClick={this.props.log_out}>Log-out</button>
            </div>
        )
    }
}

export default Home