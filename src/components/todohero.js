import React from 'react'

const Todohero = ({todos_completed,total_todos}) => {
  return (
    <div>
        <section>
      <div>
        <p>Task Done</p>
        <p>Keep it up</p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
   </div>

  )
}

export default Todohero