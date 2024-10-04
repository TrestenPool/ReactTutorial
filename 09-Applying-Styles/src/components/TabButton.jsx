export default function TabButton({children, onClick, isSelected}) { 
  
  // inner func
  function handleClick(){
    onClick()
  }

  return (
    <li>
      <button className={isSelected ? "active": null} onClick={handleClick}>{children}</button>
    </li>
  )
}