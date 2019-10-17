import React from "react";
import "../components/login.css";

class LoginPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            email: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        console.log("Username: " + this.state.username);
        console.log("Password: " + this.state.password);
        console.log("ConfirmP: " + this.state.confirmPassword);
        console.log("Email: " + this.state.confirmPassword);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (

            <div className="container">
                <div className="card"></div>
                <div className="card">
                    <h1 className="title">Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-container">
                            <input name={"username"} value={this.state.username} onChange={this.handleChange} type="#{type}" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Username</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input name={"password"}  value={this.state.password} onChange={this.handleChange} type="password" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input name={"confirmPassword"}  value={this.state.confirmPassword} onChange={this.handleChange} type="password" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input name={"email"}  value={this.state.email} onChange={this.handleChange} type="email" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Email</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button value={"Submit"}><span>Go</span></button>
                        </div>
                        <div className="footer"><a href="#">Create an account</a></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;