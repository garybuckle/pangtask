import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Island } from '$pangea/island.ts'
import Counter from '../islands/Counter.tsx'
import Header from '../islands/Header.tsx'
import { css, combine } from '$pangea/css.ts'
import About from '../pages/About.tsx'
import Tasks from '../pages/Tasks.tsx'
import Button from '../islands/Button.tsx'
import { Link, useParams } from 'react-router-dom'

const Page = ({ title }: { title: string }) => {
  const [tasks, setTask] = useState('')
  useEffect(() => {
    fetch(`http://localhost:8000/api/`)
      .then(async (res) => await res.json())
      .then((json) => setTask(json))
  })

  return (
    <>
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
        <div>
          {tasks.map((task) => {
            return <p>{task.text}</p>
          })}
        </div>
      </div>
    </>
  )
}

const getStaticProps = () => {
  return {
    props: {
      title: 'Pangea Task Manager',
    },
  }
}

export { Page as default, getStaticProps }
