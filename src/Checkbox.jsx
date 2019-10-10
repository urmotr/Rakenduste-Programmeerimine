import React from "react";
import PropTypes from "prop-types"

const Checkbox = ({name, onChange, checked}) => {
    return(
         <div>
             <label>
                 Tablets:
                 <input
                     name="isGoing"
                     type="checkbox"
                     checked={true}
                     onChange={this.handleInputChange} />
             </label>
         </div>
    )
};
Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.boolean.isRequired
};

export default Checkbox;
