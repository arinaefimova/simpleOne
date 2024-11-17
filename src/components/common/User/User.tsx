import './User.scss'

const User = () => {
  return (
    <figure className='user'>
        <img src="/user.jpg" alt="user"/>
        <figcaption>
             Максим Галактионов
        </figcaption>
    </figure>
  )
}

export default User