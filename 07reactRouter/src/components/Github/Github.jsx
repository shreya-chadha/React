import React from "react";
import { useState,useEffect } from "react";
function Github(){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary").
        then((res)=>
            res.json()
        ).then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
    return(
        <div className="bg-gray-700 p-4 text-center m-4 text-white text-3xl">Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Git picture" className="w-80"></img></div>
    )
}
export default Github