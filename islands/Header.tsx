import React from 'react'
import { css, combine } from '$pangea/css.ts'
import { Island } from '$pangea/island.ts'
import Container from '../pages/Container.tsx'
import AddTask from './AddTask.tsx'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const AddTask = () => {
  return console.log('AddTask handler')
}

const Header = ({ title }: { title: string }) => {
  return (
    <header
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        color: steelblue;
      `}
    >
      <h1>{title}</h1>
      <button
        onClick={AddTask}
        className={css`
          width: 10rem;
          height: 3rem;
          display: inline-block;
          background: steelblue;
          color: #fff;
          border: none;
          padding: 10px 20px;
          margin: 5px;
          border-radius: 5px;
          cursor: pointer;
          text-decoration: none;
          font-size: 20px;
          font-family: inherit;
          &:focus {
            outline: none;
          }
          &:active {
            transform: scale(0.98);
          }
          &:hover {
            background: red;
          }
        `}
      >
        Add Task
      </button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Pangea Task Tracker Default',
}

export { Header as default }
