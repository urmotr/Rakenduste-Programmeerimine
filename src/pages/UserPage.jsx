import React from "react";
import PropTypes from "prop-types";
import {UserPropTypes} from "../store/reducer";
import {connect} from "react-redux";
import Fancybutton from "../components/Fancybutton.jsx";
import {tokenUpdate, userUpdate} from "../store/actions";
import protectedRedirect from "../components/protectedRedirect.jsx";

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
            <div>
                You are {this.props.user.email}, created at {this.props.user.createdAt}
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