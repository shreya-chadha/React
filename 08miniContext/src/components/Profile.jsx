import React,{useContext} from "react";
import UserContext from "../context/UserContext";
function Profile(){
    const {user}=useContext(UserContext)
    if(!user.username) return<div>Please enter the valid username</div>
    if(!user.password) return <div>Enter the correct password</div>
    return<div>Welcome, {user.username}</div>
}
export default Profile;