import React from 'react'
import { Island } from '$pangea/island.ts'
import { css, combine } from '$pangea/css.ts'
import Header from '../islands/Header.tsx'

const Container = () => {
  return (
    <div
      className={css`
        max-width: 800px;
        margin: 30px auto;
        overflow: auto;
        min-height: 300px;
        border: 1px solid steelblue;
        padding: 30px;
        border-radius: 5px;
      `}
    >
      <Island
        path='islands/Header.tsx'
        app={Header}
        data={{ title: 'Pangea Task Tracker' }}
      />
    </div>
  )
}

export { Container as default }
