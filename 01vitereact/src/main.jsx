import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}
/*const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}*/

//This HTML format is parsed into the above javascript format of object creation.
//NOTE: The object made by us can not be directly rendered using render method as react's render method takes some specific arguments 
//To use this object first createElement using react and then pass the required parameters.NOW THIS CAN BE DIRECTLY RENDERED

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser="chai aur react"
const reactElement=React.createElement(
    'a',//Tag name
    {href:'https://google.com',target:'_blank'},//properties
    'click me to visit Google',//children
    anotherUser//evaluated expression
)
createRoot(document.getElementById('root')).render(
    reactElement  
) 
 