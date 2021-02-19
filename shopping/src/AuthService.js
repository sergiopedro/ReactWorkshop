import React from "react";

const AuthContext = React.createContext();

const AuthService = props => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            console.log("Time to set the user");
            setUser({
                addresses: [
                    {
                        postalCode: "2400",
                        city: "Leiria city",
                        streetName: "Rua Something",
                        houseNumber: "7",
                        main: true
                    },
                    {
                        postalCode: "5000",
                        city: "NY City",
                        streetName: "Central street",
                        houseNumber: "753",
                        main: false
                    }
                ]
            });
        }, 2000);
    }, []);

    return (
        <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
    );
};

export { AuthService, AuthContext };
