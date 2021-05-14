import './Button.css'

export default function Button({ isActive, children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      name={children}
      className={isActive ? 'Button active' : 'Button'}
    >
      {children}
    </button>
  )
}
