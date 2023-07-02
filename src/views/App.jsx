import { HashRouter, Route, Routes } from "react-router-dom";
import React, { Component, Suspense } from "react";
import LoadingApp from "../components/LoadingApp";
import "../scss/style.scss";

// Layout
const LayoutDefault = React.lazy(() => import('../layout/LayoutDefault'))

// Pages
const Login = React.lazy(() => import('./pages/login/Login'))
const Register = React.lazy(() => import('./pages/register/Register'))
const Page404 = React.lazy(() => import('./pages/page404/Page404'))
const Page500 = React.lazy(() => import('./pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<LoadingApp />}>
          <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" element={<LayoutDefault />} />
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
