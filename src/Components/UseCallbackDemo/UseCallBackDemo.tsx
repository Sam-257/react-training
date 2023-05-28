import React,{useCallback, useState} from 'react'
import Title from './Title'

import Button from './Button';
import Count from './Count';

export default function UseCallback() {
  
    const [age,setAge] = useState(30)
    const [salary,setSalary] = useState(30000)
     
     const incrementAge = useCallback(()=>{
         setAge(prevAge=> prevAge+1)
     },[])


     const incrementSalary = useCallback(()=>{
        setSalary(prevSalary=> prevSalary+1000)
     },[])
  
  return (
    <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick = {incrementAge}>Increment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick = {incrementSalary}>Increment Salary</Button>
    </div>
  )
}
