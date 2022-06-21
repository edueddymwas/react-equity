import React from 'react'
import { useState } from 'react'
import Array from './Array'

    const tasks=[
        {
           id:1,
           step:'01',
           src: require('./img1.png'),
           desc:'Martha completes primary school and passes her main exams with flying colors.',
           reminder:true,
        },
        {
           id:2,
           step:'02',
           src: require('./img2.png'),
           desc:'Her parents can’t afford her high school tuition. She then applies for the Wings To Fly program.',
           reminder:true,
        },
        {
            id:3,
            step:'03',
            src: require('./img3.png'),
            desc:'The Wings to Fly stepped in with a scholarship',
            reminder:true,
         },
         {
            id:4,
            step:'04',
            src: require('./img4.png'),
            desc:'Martha does exceptionally well in her main secondary school exams with a vision in mind for her career.',
            reminder:true,
         }]
         const Arrays = () => {
        return (
      
    <div className='arrays'>
        <h1>Martha’s Scholarship Journey</h1>
        <>
        {tasks.map((task)=> (
            // <h3 key={task.id}>{task.step}</h3>
            <Array key={task.id} task={task} />
            
        ))}
        </>
    </div>
    
  )
}

export default Arrays