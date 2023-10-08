import './App.css';
import Header from '../components/Header/Header'
import {Navigate, Route, Routes} from "react-router-dom";
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
import ProfilePage from "./ProfilePage/ProfilePage";
import InfoMessage from "./InfoMessage/InfoMessage";

function App() {
    const [authUser, setAuthUser] = useState({loggedIn: false});
    const [savedMovies, setSavedMovies] = useState([]);
    const [infoObject, setInfoObject] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false)
    }
    useEffect(() => {
        mainApi.getUserInfo().then((res) => {
            if (res) {
                handleLogin(true);
                handleUser(res.data);
            }
        }).catch(err => {
            console.log(err.message);
        });
        getMovies();
    }, [authUser.loggedIn]);

    const handleLogin = (isLogin) => {
        setAuthUser((user) => {
            return {...user, loggedIn: isLogin}
        });
    }

    const updateUser = (newUser) => {
        return mainApi.updateUser(newUser).then((res) => {
            handleUser(res.data);
        }).catch(err => {
            setInfoObject({
                typeInfo: "error",
                textInfo: err.message
            })
        })
    }

    const handleUser = (newUser) => {
        setAuthUser((user) => {
            return {...user, name: newUser.name, email: newUser.email}
        });
    }

    const getMovies = () => {
        mainApi.getMovies().then(res => {
            setSavedMovies(res.data);
        }).catch(err => {
            console.log(err.message);
        });
    }

    const addMovies = (movie) => {
        mainApi.createMovies(movie).then(newMovie => {
            setSavedMovies(movies => [...movies, newMovie]);
        }).catch(err => {
            console.log(err.message);
        });
    }

    const deleteMovies = (id) => {
        const idSaved = savedMovies.find(el => el.movieId === id)._id;
        mainApi.deleteMovies(idSaved).then(res => {
            setSavedMovies(movies => movies.filter(el => el._id !== idSaved));
        }).catch(err => {
            console.log(err.message);
        });
    }

    return (
        <CurrentUserContext.Provider value={authUser}>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/movies" element={
                        <ProtectedRoute
                            savedMovies={savedMovies}
                            addMovies={addMovies}
                            deleteMovies={deleteMovies}
                            element={Movies}/>}>
                    </Route>
                    <Route path="/saved-movies" element={
                        <ProtectedRoute
                            savedMovies={savedMovies}
                            deleteMovies={deleteMovies}
                            element={SavedMovies}/>}>

                    </Route>
                    <Route path="/profile" element={
                        <ProtectedRoute
                            handleLogin={handleLogin}
                            updateUser={updateUser}
                            element={ProfilePage}/>
                    }></Route>
                    <Route path="/signin" element={authUser.loggedIn ? <Navigate to="/"/> :
                        <Auth title="Рады видеть!" handleLogin={handleLogin} isLoginPage={true}/>}></Route>
                    <Route path="/signup"
                           element={authUser.loggedIn ? <Navigate to="/"/> : <Auth title="Добро пожаловать!"/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </div>
            <InfoMessage isOpen={isOpen} onClose={onClose} {...infoObject}/>
        </CurrentUserContext.Provider>
    );
}

export default App;
