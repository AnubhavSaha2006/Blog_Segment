import Navbar from "./components/navbar.component";
import {Routes, Route} from "react-router-dom";
import UserAuthForm from "./pages/userAuthForm.page";
import Editor from "./pages/editor.pages.jsx";
import { createContext, useEffect, useState } from "react";
import { lookInSession } from "./common/session";
import HomePage from "./pages/home.page";



export const UserContext = createContext ({})


const App = () => {

    const [userAuth, setUserAuth] = useState();

    useEffect (()=> {

        let userInSession = lookInSession("user");
        userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth ({ access_token : null} )
    }, [])


    return (


        
        <UserContext.Provider value={{userAuth, setUserAuth }}>         
            <Routes>

                <Route path="/" element={<Navbar />}>
                    <Route index element={ < HomePage />} />
                    <Route path ="signin" element={<UserAuthForm type="sign-in" />} />
                    <Route path ="signup" element={<UserAuthForm type="sign-up" />} />
                </Route>

                    <Route path = "/editor" element= {<Editor />} />
                    
            </Routes>
        </UserContext.Provider>
    )
}

export default App;