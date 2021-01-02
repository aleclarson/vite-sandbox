import React from 'react'
import { useMediaQuery } from 'react-responsive'

export function App() {
  React.useState(0)
  useMediaQuery({ width: 800 })
  return <div>Hello world</div>
}
