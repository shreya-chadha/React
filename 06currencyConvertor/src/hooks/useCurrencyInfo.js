import {useEffect,useState} from "react"
function useCurrencyInfo(currency){
    const[data,setData]=useState({})
    useEffect(
        ()=>{
            fetch(`https://v6.exchangerate-api.com/v6/fa8b4062300a81de77f56850/latest/${currency}`)
            .then((res)=>res.json())
            .then((res)=>setData(res["conversion_rates"]))
            console.log(data)
        },
    [currency])
    console.log(data)
    return data
}  
export default useCurrencyInfo