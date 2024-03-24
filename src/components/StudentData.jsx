import React from 'react'
import PropTypes from "prop-types"
const StudentData = (props) => {
  return (
    <div className='student'>
        <h1>hello</h1>
        <table border={"2px"}>
          <tr>
           <th>Name</th>
           <th>Age</th>
           <th>CLass</th>
           <th>pass</th>
          </tr>

          <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.class}</td>
            <td>{props.pass ? "yes" : "fail"}</td>
            
          </tr>
        </table>
      
    </div>
  )
}


StudentData.propTypes={
  name:PropTypes.string,
  age:PropTypes.number,
  class:PropTypes.number,

}

StudentData.defaultProps={
  name:"no name",
  age:0,
  class:0,

}
export default StudentData
