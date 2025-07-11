import Chai from './chai'
/*<> is a fragment in react because a function can return only one eleemnt so all the tags are enclosed in this fragment*/
/*To use the variable enclose the name of the variable in {} */
function App() {
  const username="chai aur code"
  return (
    <>  
   <Chai/>
   <h1> Chai aur React {username}</h1>
   </>
  )
}
export default App
