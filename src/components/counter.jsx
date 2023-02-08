import React from 'react'

const Counter = props => {
  const { value, onIncrement, onDecrement, onDelete, ...rest } = props

  const formatValue = () => {
    return value === 0 ? 'empty' : value
  }

  const getBadgeClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
  }

  const handleIncrement = () => onIncrement(rest.id)

  const handleDecrement = () => onDecrement(rest.id)

  return (
    <div>
      <span>{rest.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>
        +
      </button>
      <button className='btn btn-primary btn-sm m-2' onClick={handleDecrement}>
        -
      </button>
      <button
        className='btn btn-danger btn-sm m-2'
        onClick={() => {
          onDelete(rest.id)
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default Counter
