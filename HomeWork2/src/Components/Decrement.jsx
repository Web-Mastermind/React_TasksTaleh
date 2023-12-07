const Decrement = ({decrease, decnumber}) => {
  return(
    <button onClick={()=> { decrease !== 0 && decnumber(decrease - 1)}}>Decrement</button>
  )
}

export default Decrement;