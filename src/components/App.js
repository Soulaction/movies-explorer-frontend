import './App.css';
import Header from '../components/Header/Header'
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Main from "./Main/Main";
import SavedMovies from "./SavedMovies/SavedMovies";
import Movies from "./Movies/Movies";
import Auth from "./Auth/Auth";
import NotFound from "./NotFound/NotFound";
import {CurrentUserContext} from "../context/CurrentUserContext";
import {useEffect, useState} from "react";
import {mainApi} from "../utils/MainApi";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import ProfilePage from "./ProfilePage/ProfilePage";
import InfoMessage from "./InfoMessage/InfoMessage";
import {moviesApi} from "../utils/MoviesApi";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [authUser, setAuthUser] = useState({});
    const [savedMovies, setSavedMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [errorMovies, setErrorMovies] = useState('');
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
        moviesApi.getAllFilms().then(res => {
            setMovies(res);
        }).catch(err => {
            console.log(err);
            setErrorMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        }).finally(() => {
        });
        getSavedMovies();
    }, [loggedIn]);

    const handleLogin = (isLogin) => {
        setLoggedIn(isLogin);
        localStorage.setItem('loggedIn', isLogin);
    }

    const updateUser = (newUser) => {
        return mainApi.updateUser(newUser).then((res) => {
            handleUser(res.data);
            setInfoObject({
                typeInfo: "success",
                textInfo: "Данные пользователя изменены"
            });
            setIsOpen(true);
        }).catch(err => {
            setInfoObject({
                typeInfo: "error",
                textInfo: err.message
            });
            setIsOpen(true);
        })
    }

    const handleUser = (newUser) => {
        setAuthUser(newUser);
    }

    const getSavedMovies = () => {
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
                            movies={movies}
                            errorMovies={errorMovies}
                            savedMovies={savedMovies}
                            addMovies={addMovies}
                            deleteMovies={deleteMovies}
                            element={Movies}
                            isSavedPage={false}/>}>
                    </Route>
                    <Route path="/saved-movies" element={
                        <ProtectedRoute
                            savedMovies={savedMovies}
                            deleteMovies={deleteMovies}
                            element={SavedMovies}
                            isSavedPage={true}/>}>
                    </Route>
                    <Route path="/profile" element={
                        <ProtectedRoute
                            handleLogin={handleLogin}
                            updateUser={updateUser}
                            element={ProfilePage}/>
                    }></Route>
                    <Route path="/signin"
                           element={loggedIn ? <Navigate to="/movies"/>
                               :
                               <Auth title="Рады видеть!"
                                     handleLogin={handleLogin}
                                     setIsOpen={setIsOpen}
                                     setInfoObject={setInfoObject}
                                     isLoginPage={true}/>}></Route>
                    <Route path="/signup"
                           element={loggedIn ? <Navigate to="/movies"/>
                               :
                               <Auth title="Добро пожаловать!"
                                     handleLogin={handleLogin}
                                     setIsOpen={setIsOpen}
                                     setInfoObject={setInfoObject}
                                     isLoginPage={false}/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </div>
            <InfoMessage isOpen={isOpen} onClose={onClose} {...infoObject}/>
        </CurrentUserContext.Provider>
    );
}

export default App;
