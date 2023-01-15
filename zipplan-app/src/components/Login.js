import React, {Component} from 'react';
import "../styles/Login.css";
import Home from "./Home"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            is_logged_in: false
        }
    }

    handleName =(event) =>{
        this.setState({name: event.target.value})
    }

    toggleLogIn =()=>{
        this.setState({is_logged_in: !this.state.is_logged_in})
    }

    render(){
        let log_in_form = <form>
                            <label>First name:</label>
                            <input type={"text"} onChange={this.handleName} defaultValue={"Name"} value={this.state.name}/>
                            <button type={"button"} onClick={this.toggleLogIn}>log-in</button>
                        </form>
        return(
            <div>
                {this.state.is_logged_in ? <Home name={this.state.name} log_out={this.toggleLogIn}/>: log_in_form}
            </div>
        )
    }
}

export default Login