import React from 'react'
import { Link } from 'react-router-dom'

import { css, combine } from '$pangea/css.ts'

const About = () => {
  return (
    <>
      <h1>About the Task Manager</h1>
      <p>
        Pangea task manager helps users manage their tasks by providing tools to
        help them organize and track their progress. Users can mark tasks as
        complete or incomplete, move tasks between different lists or
        categories, and set reminders or notifications to keep them on track.
      </p>
      <h4>
        <Link to='/'>Back</Link>
      </h4>
    </>
  )
}

export { About as default }
