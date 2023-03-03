import React from 'react'
import { css, combine } from '$pangea/css.ts'

const Button = ({ text }: { text: string }) => {
  return <button>{text}</button>
}

export { Button as default }
