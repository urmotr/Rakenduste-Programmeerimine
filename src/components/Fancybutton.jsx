import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Fancybutton = ({value, onClick}) => {
    return(
        <div className="button-container">
            <button onClick={onClick} value={"Submit"}><span> <FontAwesomeIcon icon={faShoppingCart}/>{value}</span></button>
        </div>
    );
};

Fancybutton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Fancybutton;