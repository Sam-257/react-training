import React from 'react'
import useWindowWidth from '../custom hooks/useWindowWidth';

export default function Layout() {

  const smallScreen = useWindowWidth()

  return (
    <div>
        {smallScreen?'small':'Large'}
    </div>
  )
}