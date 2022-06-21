import React from 'react'
import Image from './img1.png'
const Array = ({task}) => {
  return (
      <>
      
      <div style={{display:'flex', color:'maroon'}} className='array-item'>
          <div className='test1'>
            <img style={{height:'150px', marginRight:'30px'}} src={task.src}/>
        </div>

         <div style={{width:'40%'}}>
            <h3>{task.step}</h3>
            <p>{task.desc}</p>
        </div>
      </div>
      </>
  )
}

export default Array