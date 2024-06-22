import Navbar from "./components/navbar.component";
import {Routes, Route} from "react-router-dom";
import UserAuthForm from "./pages/userAuthForm.page";
import Editor from "./pages/editor.pages";
import { createContext, useEffect, useState } from "react";
import { lookInSession } from "./common/session";
import HomePage from "./pages/home.page";


export const UserContext = createCoontext ({})


const App = () => {

    const [userAuth, setUserAuth] = useState();

    useEffect (()=> {

        let userInSession = lookInSession("user");
        userInSession ? setUserAuth(SON.parse(userInSession)) : setUserauth ({ access_token : null} )
    }, [])


    return (


        
        <UserContext.Provider value={{UserAuth, setUserAuth }}>
            <Route path = "/editor" element= {<Editor />} />
            <Routes>
            <Route path="/" element={<Navbar />}>
            <Route index element={ < HomePage />} />
                <Route path ="signin" element={<UserAuthForm type="sign-in" />} />
                <Route path ="signup" element={<UserAuthForm type="sign-up" />} />
                </Route>
            </Routes>
        </UserContext.Provider>
    )
}

export default App;