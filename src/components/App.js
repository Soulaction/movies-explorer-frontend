import './App.css';
import Header from '../components/Header/Header'
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import SavedMovies from "./SavedMovies/SavedMovies";
import Movies from "./Movies/Movies";
import Profile from "./Profile/Profile";
import Auth from "./Auth/Auth";
import NotFound from "./NotFound/NotFound";
import {CurrentUserContext} from "../context/CurrentUserContext";
import {useEffect, useState} from "react";
import {mainApi} from "../utils/MainApi";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
    const [authUser, setAuthUser] = useState({loggedIn: false});

    useEffect(() => {
        mainApi.getUserInfo().then((res) => {
            if (res) {
                setAuthUser((user) => {
                    return {... user, ...res.data, loggedIn: true}
                });
                console.log(authUser);
            }
        }).catch(err => {
            console.log(err.message);
        })

    }, [authUser.loggedIn]);

    const handleLogin = (isLogin) => {
        setAuthUser((user) => {
            return {... user, loggedIn: isLogin}
        });
    }

    return (
        <CurrentUserContext.Provider value={authUser}>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/movies" element={
                        <ProtectedRoute
                            element={Movies}/>}>
                    </Route>
                    <Route path="/saved-movies" element={
                        <ProtectedRoute
                            element={SavedMovies}/>}>

                    </Route>
                    <Route path="/profile" element={
                        <ProtectedRoute
                            element={
                                <>
                                    <Header/>
                                    <Profile/>
                                </>
                            }/>
                    }></Route>
                    <Route path="/signin" element={<Auth title="Рады видеть!" isLoginPage={true}/>}></Route>
                    <Route path="/signup" element={<Auth title="Добро пожаловать!"/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
