const Reset = ({reload}) => {
  return(
    <button className="reset" onClick={()=> {reload(0)} }>Reset</button>
  )
}

export default Reset;