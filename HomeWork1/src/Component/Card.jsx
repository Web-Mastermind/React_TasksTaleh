const Card = ({imgsrc, title, desc})=> {
  return (
    <div className="card">
      <img className="card-img"src={imgsrc} />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{desc}</p>
    </div>
  )
}
export default Card;