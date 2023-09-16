import "./ProfileLabel.css"
import {NavLink} from "react-router-dom";

const ProfileLabel = () => {
    return (
        <NavLink to="/profile" className="profile-label">
            <p className="profile-label__name">Аккаунт</p>
            <div className="profile-label__img"></div>
        </NavLink>
    )
}

export default ProfileLabel;
