import React from "react";
import PropTypes from "prop-types";
import {UserPropTypes} from "../store/reducer";
import {connect} from "react-redux";
import Fancybutton from "../components/Fancybutton.jsx";
import {tokenUpdate, userUpdate} from "../store/actions";
import protectedRedirect from "../components/protectedRedirect.jsx";
import "../components/style/userpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

class UserPage extends React.PureComponent {

    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
    };

    handleSignOut = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    };

    render() {
        return (
            <div className={"userContainer"}>
                <div className={"userText"}><FontAwesomeIcon icon={faEnvelope}/> Email: {this.props.user.email}</div>
                <div className={"userText"}><FontAwesomeIcon icon={faCalendarAlt}/> Created at: {this.props.user.createdAt}</div>
                <Fancybutton onClick={this.handleSignOut} value={"Sign Out"}/>
            </div>
        );
    }
}

const MapStateToProps = (store) => {
    return {
        user: store.user,
    };
};

export default  connect(MapStateToProps)(protectedRedirect(UserPage));