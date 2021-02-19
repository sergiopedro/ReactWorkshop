import React from "react";

const useForm = () => {

    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch (action.type) {
                default:
                    return state;
            }
        },
        {
            value: "",
            errors: []
        }


    );
    return { state, dispatch };
};


export { useForm };

