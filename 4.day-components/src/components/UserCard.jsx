import '../App.scss'

const sevdeImage = 'https://picsum.photos/200'

const UserCard = () => {
    return (
        <div className='user-card'>
            <img src={sevdeImage} alt='sevde image' />
            <h2>Lorem Picsum Photo</h2>
        </div>
    )
}

export default UserCard