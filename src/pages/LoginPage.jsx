import React from "react";
import "../components/login.css";
import PropTypes from "prop-types";

class SignupPage extends React.PureComponent {

    static propTypes = {
      history: PropTypes.object.isRequired,
      onLogin: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch("api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then( res=> res.json())
            .then(({token, user}) =>{
            this.props.onLogin(token, user);
            this.props.history.push(`/users/${user._id}`);
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
                    <h1 className="title">Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-container">
                            <input name={"email"} value={this.state.email} onChange={this.handleChange} type="email" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Email</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input name={"password"}  value={this.state.password} onChange={this.handleChange} type="password" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button value={"Submit"}><span>Go</span></button>
                        </div>
                        <div className="footer"><a href="../signup">Create an account</a></div>
                    </form>
                </div>
                </div>
        );
    }
}
export default SignupPage;