import React, {useState} from 'react'
import Greet from './Greet'

const LoginState = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
	<>
		<button onClick={()=> setIsLoggedIn(true) }> Login </button>
		<button onClick={() => setIsLoggedIn(false)}> Log Out</button>
		<Greet isLoggedIn={isLoggedIn} />
	</>
  )
}

export default LoginState