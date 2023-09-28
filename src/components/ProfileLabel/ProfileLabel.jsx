import "./ProfileLabel.css"
import {useLocation} from "react-router-dom";

const ProfileLabel = ({isMenu}) => {
    const {pathname} = useLocation();

    return (
        <div className={`profile-account${pathname !== '/' || isMenu ? ' profile-account_dark' : ''}`}>
            <p className="profile-account__name">Аккаунт</p>
            <div className={`profile-account__img${pathname !== '/' || isMenu ? ' profile-account__img_dark' : ''}`}></div>
        </div>
    )
}

export default ProfileLabel;
