

const UserProfile = props =>{
    const {userDetails, deleteUser} = props;


    const {imageUrl,name,role,uniqueNo} = userDetails; 

    const onChangeDelete=()=>{
        deleteUser(uniqueNo)
    }

    return(
        <li className="user-card-container">
      <img src={imageUrl} className="profile-pic w-25" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button className="delete-button" >
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img w-50"
          onClick={onChangeDelete}
        />
      </button>
    </li>

    )
}

export default UserProfile;