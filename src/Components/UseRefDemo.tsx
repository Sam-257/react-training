import React, { useEffect, useRef } from 'react'

const UseRefDemo = () => {
    const divElement:any =  useRef()
   console.log(divElement)
   
   useEffect(()=>{
      divElement.current.focus()
   },[])

  return (
      /*  <div ref={divElement}>
       <h1>ReactJS</h1>
    </div> */

     <input type="text" ref={divElement} />
  );
}

export default UseRefDemo