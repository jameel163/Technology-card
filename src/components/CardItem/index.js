import './index.css'

const CardItems = props => {
  const {items} = props
  const {title, description, imgUrl, className} = items
  return (
    <li className={className}>
      <h1 className="list-heading">{title}</h1>
      <p className="list-para">{description}</p>
      <div className="image-cont">
        <img className="list-image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItems
