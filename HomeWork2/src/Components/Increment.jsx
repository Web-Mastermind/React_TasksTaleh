const Increment = ({increase, number}) => {
  return(
    <button className="increase" onClick={()=> {number(increase + 1)} } >Increment</button>
  )
}

export default Increment;