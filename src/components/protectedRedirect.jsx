import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {UserPropTypes} from "../store/reducer";

const protectedRedirect = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName = "protected-redirect-hoc";
        static propTypes = {
            user: PropTypes.shape(UserPropTypes),
        };
        render(){
            if(!this.props.user) return <Redirect to={"/"}/>;
            return(
                <WrappedComponent {...this.props}/>
            );
        }
    };
};

export default protectedRedirect;