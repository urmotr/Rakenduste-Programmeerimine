import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({name, onChange, checked}) => {
    return(
         <div>
             <label className={"checkbox"}>
                 {name}:
                 <input
                     key={name}
                     name={name}
                     type={"checkbox"}
                     checked={checked}
                     onChange={onChange} />
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
