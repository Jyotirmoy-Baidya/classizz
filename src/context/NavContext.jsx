// context/NavContext.js
import { createContext, useState } from 'react';

const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
    const [active, setActive] = useState(0);

    return (
        <NavContext.Provider value={{ active, setActive }}>
            {children}
        </NavContext.Provider>
    );
};

export default NavContext;
