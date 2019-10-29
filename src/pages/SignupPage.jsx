import React from "react";
import "../components/login.css";

class LoginPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirmPassword: "",
            email: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        fetch("api/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        });
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
                    <h1 className="title">Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-container">
                            <input name={"email"}  value={this.state.email} onChange={this.handleChange} type="email" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Email</label>
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
                        <div className="button-container">
                            <button value={"Submit"}><span>Go</span></button>
                        </div>
                        <div className="footer"><a href="../login">Sign in</a></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;