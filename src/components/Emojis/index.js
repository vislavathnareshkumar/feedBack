import './index.css'

const Emojis = props => {
  const {eachemoji} = props
  const {name, imageUrl} = eachemoji

  return (
    <li className="list-item">
      <img className="image" alt="text" src={imageUrl} />
      <p>{name}</p>
    </li>
  )
}
export default Emojis
