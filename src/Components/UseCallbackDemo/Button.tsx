import React from 'react'
type IProps = {
      handleClick:()=>void
      children: JSX.Element | React.ReactNode

}
function Button(props:IProps) {
    console.log(`Rendering - ${props.children}`)
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.children}
        </button>
    </div>
  )
}

export default React.memo(Button)