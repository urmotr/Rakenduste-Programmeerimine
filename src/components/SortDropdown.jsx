import React from "react";
import PropTypes from "prop-types";
import "./style/dropdown.css";

const SortDropdown = ({direction, onChange, sortMethod}) => {
    return(
        <form>
        <ul className="select">
            <li>
                <input className="select_close" type="radio" name="awesomeness" id="awesomeness-close" value=""/>
                <span className="select_label select_label-placeholder">{sortMethod}</span>
            </li>

            <li className="select_items" value={direction} onChange={onChange}>
                <input value={0} className="select_expand" type="radio" name="awesomeness" id="awesomeness-opener"/>
                <label className="select_closeLabel" htmlFor="awesomeness-close"></label>

                <ul className="select_options">
                    <li className="select_option">
                        <input value={-1} className="select_input" type="radio" name="awesomeness" alt={"Price high to low"} id="awesomeness-ridiculous"/>
                        <label className="select_label" htmlFor="awesomeness-ridiculous">Price high to low</label>
                    </li>

                    <li className="select_option">
                        <input value={1}  className="select_input" type="radio" name="awesomeness" alt={"Price low to high"} id="awesomeness-reasonable"/>
                        <label className="select_label" htmlFor="awesomeness-reasonable">Price low to high</label>
                    </li>
                </ul>

                <label className="select_expandLabel" htmlFor="awesomeness-opener"></label>
            </li>
        </ul>
        </form>
    );
};

SortDropdown.propTypes = {
    direction: PropTypes.oneOf([1,-1, 0]).isRequired,
    onChange: PropTypes.func.isRequired,
    sortMethod: PropTypes.string.isRequired,
};

export default SortDropdown;

