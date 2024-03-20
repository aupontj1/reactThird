function ProfileCard({name, user, imageSrc, desc}){
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={imageSrc} alt="logo-img" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">This is: {name}</p>
                    <p className="subtitle is-6">User is: {user}</p>
                </div>
                <div className="content">
                    <p className="subtitle is-6">{desc}</p>
                </div>
            </div>
        </div>

    );
}



export default ProfileCard;