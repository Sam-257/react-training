import React from 'react'

type Props = {
    checkBoxName: string,
    showCompleted: boolean,
    handleShow: ()=>void
}

const VisibilityControl = ({checkBoxName, showCompleted, handleShow}: Props) => {
  return (
    <div>
        <input type="checkbox" checked={showCompleted} onChange={handleShow} /> {checkBoxName}
    </div>
  )
}

export default VisibilityControl