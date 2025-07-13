import { useState,useCallback,useEffect,useRef} from 'react'
//useCallback is a React hook that lets you cache a function between re renders.
//Think of memoization as caching a value so that it does not need to be recalculated.
//why do we need it here?
//Hume passwordGenerator fn ko baar baar call krna padega agr length change hoti hai,agr number aur sp.char allowed hai ya nhi..
//Issi cheez ko avoid krne ke liye we can cache this fn. so that it doesnt get recreated until all the dependencies are same  
//Math.random() func returns a value between 0(inclusive) and 1(exclusive).As 0 is inclusive so we have to add 1 to not make index 0 
//useEffect is a React hook that perform side effects. 
//passwordGenerator fn tab tab call hoga jab any of the dependencies i.e length,numberAllowed,charAllowed will change
function App() {
  const[length,setLength]=useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")
  //useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const passwordRef=useRef(null)
  //Password ko generate ke liye
  const passwordGenerator=useCallback( ()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed==true){
      str+="1234567890"
    }
    if(charAllowed==true){
      str+="!@#$%^&*()_+{}[]~`"
    }
    for(let i=1;i<=length;i++){
      let ind=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(ind) 
    }
    setPassword(pass)
  }
   
    ,[length,numberAllowed,charAllowed])

    const copyPasswordToClipboard =useCallback(()=>{
      passwordRef.current?.select()//to display that the password is selected
      passwordRef.current?.setSelectionRange(0,20)//to select first 20 chars of the password
      window.navigator.clipboard.writeText(password)
    },[password])//jab jab password change hoga tab tab diff diff text clipboard pr copy hoga

//Password ko display krane ke liye
//Jab humara page load hota hai toh first time pr yeh call hota hai aur agr dependencies mein kuch bhi change ho tab bhi re run hota hai
  useEffect(()=>{
    passwordGenerator()},
  [length,numberAllowed,charAllowed])  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <p className="text-center text-xl text-white px-3 justify-center">Password Generator</p> 
    <div className="flex">    
    <input className='bg-white text-gray-500 w-full rounded-lg mb-8 outline-none'
    type="text"
    value={password}
    placeholder="password"
    readOnly
    
    //React se input box(password) pr control maangna jisse hum uspr javascript ke through select jaise fns run kr sake
    //To connect the passwordRef to the input box 
    ref={passwordRef}>
    </input>
      <button 
      onClick={copyPasswordToClipboard}
      className="bg-blue-500 text-white rounded-lg px-2 py-3 mb-8">copy</button>
      </div>
      <div className='flex text-sm gap-x-2 px-4'>
        <div className='flex items-center gap-x-1 '>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          //e.target-Jiss element pr event occur hota hai i.e yaha input elemnt
          //e.target.value-to access the current value of the specific HTML element that triggered an event 
          // yaha jaha humara input elemnt mein cursor point krega vahi value humari length set ho jaayegi
          onChange={(e)=>{
            setLength(e.target.value)}}
          ></input>
          <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-2'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={(e)=>{setNumberAllowed((prev)=>!prev)}}></input>
          <label>Numbers</label>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={(e)=>{setCharAllowed((prev)=>!prev)}}></input>
          <label>Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}
export default App
