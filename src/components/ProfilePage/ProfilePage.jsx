import Header from "../Header/Header";
import Profile from "../Profile/Profile";

const ProfilePage = ({handleLogin, updateUser}) => {
    return (
        <>
            <Header/>
            <Profile handleLogin={handleLogin}
                     updateUser={updateUser}/>
        </>
    )
}

export default ProfilePage;
