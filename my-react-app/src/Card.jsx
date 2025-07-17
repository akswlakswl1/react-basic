import profilePic from './assets/profile.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile"/>
            <h2 className='card-title'>My card</h2>
            <p className='card-text'>
                I'm programmer and dad
            </p>
        </div>
    );
}

export default Card