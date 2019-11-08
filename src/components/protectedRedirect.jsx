import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

const protectedRedirect = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName = "protected-redirect-hoc";
        static propTypes = {
            user: PropTypes.object.isRequired,
        };
        render(){
            if(!this.props.user.email) return <Redirect to={"/"}/>;
            return(
                <WrappedComponent {...this.props}/>
            );
        }
    };
};

export default protectedRedirect;