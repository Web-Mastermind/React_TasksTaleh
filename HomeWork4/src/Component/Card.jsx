const Card = ({title, desc})=> {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{desc}</p>
    </div>
  )
}
export default Card;