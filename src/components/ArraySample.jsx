import React from 'react'

const ArraySample = (props) => {
    const {items}=props
  return (
    <div>
     <h1>hello this is arraysample</h1>
     <ul>
        {items.map((item)=>(
            <li>{item.name}</li>
        
            ))}
     
     </ul>
    </div>
  )
}

export default ArraySample
