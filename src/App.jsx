import HariCode from "./components/HariCode"
import StudentData from "./components/StudentData"
import ChildComponent from "./components/ChildComponent"
import ArraySample from "./components/ArraySample"
function App() {
 const items=[
  {id:1,name:"id1"}, 
  {id:2,name:"id2"},
  {id:3,name:"id3"},  ]
  return (
    <>
    <ArraySample items={items}/>
 
    </>
   
  )
}

export default App
