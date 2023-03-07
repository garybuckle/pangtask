import { Island } from '$pangea/island.ts'
import { css, combine } from '$pangea/css.ts'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Tasks = () => {
  const [tasks, setTask] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8000/api/`)
      .then(async (res) => await res.json())
      .then((json) => setTask(json))
  }, [])
  return (
    <>
      <h1>Tasks</h1>
      <p>Tasks will appear here when Gary implements the API </p>
      <div>
        {tasks.map((task) => {
          return (
            <div>
              <h4>{task.name}</h4>
            </div>
          )
        })}
      </div>
    </>
  )
}
export { Tasks as default }
