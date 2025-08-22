"use client"
import React, { useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { Todo } from '@/generated/prisma'
import { saveTodo } from '@/actions'

const TodoForm = ({ todo }: { todo: Todo }) => {
  const [description, setDescription] = useState(todo.description)

  // Correct function call with camelCase
  const saveTodoAction = async () => {
    await saveTodo(todo.id, description)
  }

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault()  // Prevent default form submission
          await saveTodoAction()
          // Optionally add UI feedback here on success/failure
        }}
      >
        <button type="submit">Save</button>
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          value={description}  // Use controlled value
          onChange={(value) => setDescription(value || '')}  // Update state on changes
        />
      </form>
    </div>
  )
}

export default TodoForm
