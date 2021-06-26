import React, { Component } from 'react'
import './login.css'
export class Loginform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    usernamechanger = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    passwordchanger = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    submitchanger = (e) => {
        e.preventDefault();
        /* if (this.state.username === "username" && this.state.password === "username") {
             alert("succesfully logined");
         }
         else {
             alert("login failed");
         }*/
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result => console.log(result));

    }
    render() {
        return (
            <div>
                <form className="loginchanging" onSubmit={this.submitchanger}>
                    <label for="username">
                        USERNAME:<input type="text" value={this.state.username} placeholder="username" id="username" onChange={this.usernamechanger} /><br />
                    </label>
                    <label for="password">


                        PASSWORD:<input type="password" value={this.state.password} placeholder="password" id="password" onChange={this.passwordchanger} /><br />
                    </label>
                    <input type="submit" value="login" />

                </form>
            </div>
        )
    }
}

export default Loginform
