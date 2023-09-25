import "./ProfileLabel.css"
import {useLocation} from "react-router-dom";

const ProfileLabel = () => {
    const {pathname} = useLocation();

    return (
        <div className={`profile-account${pathname === '/' ? '' : ' profile-account_dark'}`}>
            <p className="profile-account__name">Аккаунт</p>
            <div className={`profile-account__img${pathname === '/' ? '' : ' profile-account__img_dark'}`}></div>
        </div>
    )
}

export default ProfileLabel;
