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
import {useState} from "react";

function App() {
    const [authUser, setAuthUser] = useState({name: 'Дмитрий', email: 'ds5@mail.ru'});

    return (
        <CurrentUserContext.Provider value={{authUser}}>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/movies" element={<Movies/>}></Route>
                    <Route path="/saved-movies" element={<SavedMovies/>}></Route>
                    <Route path="/profile" element={
                        <>
                            <Header/>
                            <Profile/>
                        </>
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
