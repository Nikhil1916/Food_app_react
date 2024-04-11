import { createContext } from "react";

const userContext = createContext({
        loggedInUserName: 'Default User',
        
});

export default userContext;