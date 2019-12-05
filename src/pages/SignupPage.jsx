import * as services from "../services";
import React from "react";
import "../components/style/login.css";
import PropTypes from "prop-types";
import {toast} from "react-toastify";

class LoginPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            email: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        services.signup(this.state)
            .then((json) => {
                console.log(json);
                if(!json.errors){
                    this.props.history.push("/login");
                    toast.success("Registeerimine õnnestust");
                } else {
                    toast.error("Registeerimine ebaõnnestus: " + json.errors[0].msg,);
                }
            })
            .catch(err =>{
                console.log("Error", err);
                toast.error("Registeerimine ebaõnnestus");
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