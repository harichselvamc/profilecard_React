import React from 'react'
import "./HariCode.css"
const HariCode = () => {
    let styless= "code";
    let hello=false;
    let appli=  hello  ? <h1>this is data</h1> : <p>this is data</p>
    let lisst=["one",'Tweo',"threyo","what"]
  return (
    
    <div>
        
        <h1 className='headers'>helloo this is h1</h1>
        <p className='Bodyy'>this is paragraph</p>

        <p className={styless}>customer style</p>
        {appli}
        <ul>
            {
                lisst.map((item,index)=><li key={item }>{item}</li>)
                
            }
        
        </ul>
            
    </div>
  )
}

export default HariCode
