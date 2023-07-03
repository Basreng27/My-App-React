import React, { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {AppLoading} from "../components/partials/Index";

const Login = React.lazy(()=>import("./pages/Login"))

class App extends Component{
    render(){
        return (
            <HashRouter>
                <Suspense fallback={<AppLoading />}>
                    <Routes>
                        <Route path="*" element={<Login />} />
                    </Routes>
                </Suspense>
            </HashRouter>
        )
    }
}

export default App