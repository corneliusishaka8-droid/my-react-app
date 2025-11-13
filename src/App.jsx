import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
     <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>To-Do List</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          style={{ flex: 1, padding: '8px', fontSize: '16px' }}
        />
        <button
          onClick={addTodo}
          style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '16px' }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px',
              marginBottom: '8px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ cursor: 'pointer' }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#999' : '#000'
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: '4px 8px',
                cursor: 'pointer',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#999' }}>No tasks yet. Add one!</p>
      )}
    </div>
  )
}



export default App
