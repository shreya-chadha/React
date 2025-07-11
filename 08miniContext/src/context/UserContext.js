import React from "react";
//Sabse pehla kaam is context banana
const UserContext=React.createContext()
//Context basically ek global variable jisse baaki saare components access kr skte hai.
//It allows a kind of global access to a specific part of component tree
export default UserContext;