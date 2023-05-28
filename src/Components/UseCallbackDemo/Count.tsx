import React from 'react'
type IProps = {
    text: string
    count: number
}
function Count(props:IProps) {
    console.log(`Rendering - ${props.text}`)
  return (
    <div>
      {props.text} - {props.count}
    </div>
  )
}

export default React.memo(Count)