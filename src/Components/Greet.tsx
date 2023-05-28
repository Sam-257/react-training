import React from 'react'

type Props = {
    isLoggedIn: boolean
}

const Greet = ({isLoggedIn}: Props) => {
  return (
    <div>
        Welcome {isLoggedIn ? 'Sam' : 'Guest'}
    </div>
  )
}

export default Greet