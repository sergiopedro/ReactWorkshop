import React from "react";
const UsernameForm = () => {
    return (
        <div className="UsernameForm">
            <h3>Username Form</h3>
            <ul className="errors">
                <li>Sample Error</li>
            </ul>
            <input type="text" placeholder="Username" />
            <button>Validate</button>
        </div>
    );
};
export default UsernameForm;
