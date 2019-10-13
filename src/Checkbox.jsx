import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({name, onChange, checked}) => {
    return(
         <div>
             <div className={"name"}> {name}: </div>
                 <input
                     id={name}
                     key={name}
                     name={name}
                     type={"checkbox"}
                     checked={checked}
                     onChange={onChange} />
             <label className={"checkbox"} htmlFor={name}>
             </label>
         </div>
    );
};
Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired
};

export default Checkbox;
