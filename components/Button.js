const Button = ({ children, className, onClick }) => {
    return (
      <button
        className={`p-2 rounded-md ${className}`}
        onClick={onClick}
      >{children}</button>
    )
  }
  
export default Button